import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Blob {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  color: string;
}

export function GradientMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Color palette - Charcoal/Slate with blue accent
    const colors = isDark
      ? ['#020617', '#0f172a', '#1e293b', '#334155', '#475569', '#1e40af', '#3b82f6'] // Slate grays + blue accents
      : ['#94a3b8', '#cbd5e1', '#e2e8f0', '#f1f5f9', '#f8fafc', '#60a5fa', '#93c5fd']; // Light slate grays + light blue accents

    // Initialize blobs
    const blobs: Blob[] = [];
    for (let i = 0; i < colors.length; i++) {
      blobs.push({
        x: Math.random(),
        y: Math.random(),
        speedX: (Math.random() - 0.5) * 0.0015,
        speedY: (Math.random() - 0.5) * 0.0015,
        color: colors[i],
      });
    }

    let animationId: number;

    const animate = () => {
      // Clear background
      ctx.fillStyle = isDark ? '#000000' : '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set blend mode
      ctx.globalCompositeOperation = 'lighten';

      // Update and draw blobs
      blobs.forEach((blob) => {
        // Update position
        blob.x += blob.speedX;
        blob.y += blob.speedY;

        // Bounce off edges
        if (blob.x < 0 || blob.x > 1) blob.speedX *= -1;
        if (blob.y < 0 || blob.y > 1) blob.speedY *= -1;

        // Clamp position
        blob.x = Math.max(0, Math.min(1, blob.x));
        blob.y = Math.max(0, Math.min(1, blob.y));

        // Draw gradient
        const x = blob.x * canvas.width;
        const y = blob.y * canvas.height;
        const size = Math.min(canvas.width, canvas.height) * 0.7;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);

        // Convert hex to rgba
        const r = parseInt(blob.color.slice(1, 3), 16);
        const g = parseInt(blob.color.slice(3, 5), 16);
        const b = parseInt(blob.color.slice(5, 7), 16);
        const alpha = isDark ? 0.35 : 0.15; // Increased light mode opacity

        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha * 0.4})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Reset blend mode
      ctx.globalCompositeOperation = 'source-over';

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
