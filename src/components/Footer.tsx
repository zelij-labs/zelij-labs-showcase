import { useTheme } from "./ThemeProvider";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import { Linkedin, MessageSquare, Instagram } from "lucide-react";

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <img
              src={isDark ? logoDark : logoLight}
              alt="Zelij Labs Logo"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold font-montserrat uppercase tracking-wide">Zelij Labs</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zelij Labs. All rights reserved.
            </div>

            <div className="flex gap-4 items-center">
              <a
                href="https://www.linkedin.com/company/zelij-labs/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/zelijlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Discord"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/zelijlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
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
