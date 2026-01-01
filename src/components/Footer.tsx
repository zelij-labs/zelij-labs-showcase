import { useTheme } from "./ThemeProvider";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <img 
              src={isDark ? logoDark : logoLight} 
              alt="Zelij Labs Logo" 
              className="w-6 h-6" 
            />
            <span className="text-sm font-semibold">zelij labs</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zelij Labs. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
