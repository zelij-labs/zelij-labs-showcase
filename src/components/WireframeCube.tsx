import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";
import * as THREE from 'three';

export function WireframeCube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const params = {
      backgroundColor: isDark ? '#000000' : '#ffffff', // Pure black for dark mode
      lineColor: isDark ? '#475569' : '#94a3b8', // Visible slate gray
      dotColor: isDark ? '#94a3b8' : '#64748b',   // Brighter signals for visibility
      speed: 0.03,  // Much slower signal flow
      dotLength: 0.08,  // Longer signal trails
      dotDensity: 1.5   // More frequent signals
    };

    scene.background = new THREE.Color(params.backgroundColor);

    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    // Use full device pixel ratio for crisp lines on high-DPI displays
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Auto-rotate with smooth drift
    let rotationY = 0;
    let rotationX = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;

    // Geometry generation
    function isPointInside(v: THREE.Vector3): boolean {
      const r = 12;
      return Math.abs(v.x) < r && Math.abs(v.y) < r && Math.abs(v.z) < r;
    }

    function isSurface(v: THREE.Vector3, step: number): boolean {
      if (!isPointInside(v)) return false;

      const dirs = [
        new THREE.Vector3(step, 0, 0), new THREE.Vector3(-step, 0, 0),
        new THREE.Vector3(0, step, 0), new THREE.Vector3(0, -step, 0),
        new THREE.Vector3(0, 0, step), new THREE.Vector3(0, 0, -step)
      ];

      for (let d of dirs) {
        const neighbor = v.clone().add(d);
        if (!isPointInside(neighbor)) {
          return true;
        }
      }
      return false;
    }

    function createShapeGeometry(): THREE.BufferGeometry {
      const positions: number[] = [];
      const attributes: number[] = [];

      const step = 2;
      const maxSegments = 6000;

      let currentPos = new THREE.Vector3(0, 0, 0);
      let currentDist = 0;

      const findStartPoint = (): THREE.Vector3 => {
        let p = new THREE.Vector3();
        for (let k = 0; k < 200; k++) {
          p.set(
            (Math.random() - 0.5) * 26,
            (Math.random() - 0.5) * 26,
            (Math.random() - 0.5) * 26
          ).round();

          p.x = Math.round(p.x / step) * step;
          p.y = Math.round(p.y / step) * step;
          p.z = Math.round(p.z / step) * step;

          if (isSurface(p, step)) return p;
        }
        return new THREE.Vector3(0, 0, 0);
      };

      currentPos = findStartPoint();

      for (let i = 0; i < maxSegments; i++) {
        const dirs = [
          new THREE.Vector3(step, 0, 0), new THREE.Vector3(-step, 0, 0),
          new THREE.Vector3(0, step, 0), new THREE.Vector3(0, -step, 0),
          new THREE.Vector3(0, 0, step), new THREE.Vector3(0, 0, -step)
        ];

        const dirIndex = Math.floor(Math.random() * 6);
        const direction = dirs[dirIndex];
        const nextPos = currentPos.clone().add(direction);

        if (isSurface(nextPos, step)) {
          positions.push(currentPos.x, currentPos.y, currentPos.z);
          positions.push(nextPos.x, nextPos.y, nextPos.z);

          attributes.push(currentDist);
          attributes.push(currentDist + step);

          currentDist += step;
          currentPos.copy(nextPos);
        } else {
          currentDist += 50.0;
          currentPos = findStartPoint();
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('lineDistance', new THREE.Float32BufferAttribute(attributes, 1));
      return geometry;
    }

    // Shader
    const vertexShader = `
      attribute float lineDistance;
      varying float vDistance;

      void main() {
        vDistance = lineDistance;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 colorLine;
      uniform vec3 colorDot;
      uniform float uTime;
      uniform float uSpeed;
      uniform float uDotLength;
      uniform float uDotRepeat;

      varying float vDistance;

      void main() {
        float alpha = 0.3; // Base wire visibility

        float distanceState = vDistance - uTime * uSpeed * 10.0;
        float flow = mod(distanceState, uDotRepeat * 10.0);
        float lengthVal = (uDotRepeat * 10.0) * uDotLength;

        float signal = smoothstep((uDotRepeat * 10.0) - lengthVal, (uDotRepeat * 10.0), flow);
        if(flow < (uDotRepeat * 10.0) - lengthVal) signal = 0.0;

        vec3 finalColor = mix(colorLine, colorDot, signal);
        // Make signals much brighter and more visible
        float finalAlpha = mix(alpha, 1.0, signal);

        gl_FragColor = vec4(finalColor, finalAlpha);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        colorLine: { value: new THREE.Color(params.lineColor) },
        colorDot: { value: new THREE.Color(params.dotColor) },
        uTime: { value: 0 },
        uSpeed: { value: params.speed },
        uDotLength: { value: params.dotLength },
        uDotRepeat: { value: params.dotDensity }
      },
      transparent: true,
      depthTest: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      linewidth: 1 // Note: linewidth > 1 not supported in most WebGL implementations
    });

    const mesh = new THREE.LineSegments(createShapeGeometry(), material);
    scene.add(mesh);

    // Animation
    const clock = new THREE.Clock();

    function animate() {
      const time = clock.getElapsedTime();
      material.uniforms.uTime.value = time;

      // Smooth fluid rotation with sine wave drift
      targetRotationY += 0.0003;
      targetRotationX += 0.0001;

      // Add subtle sine wave drift for more organic movement
      const drift = Math.sin(time * 0.1) * 0.001;

      // Smooth interpolation (ease) towards target rotation
      rotationY += (targetRotationY - rotationY) * 0.05;
      rotationX += (targetRotationX - rotationX) * 0.05;

      mesh.rotation.y = rotationY + drift;
      mesh.rotation.x = rotationX + drift * 0.5;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      material.dispose();
      mesh.geometry.dispose();
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
