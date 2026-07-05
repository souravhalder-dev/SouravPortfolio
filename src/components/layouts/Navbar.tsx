import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/40">
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href={"/"} className="group">
          <span className="font-bold text-xl bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            Sourav.dev
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#intro" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
}
