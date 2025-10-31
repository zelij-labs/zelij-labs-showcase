import logo from "@/assets/zelij-logo.jpeg";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Zelij Labs Logo" className="w-6 h-6 rounded-full" />
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
