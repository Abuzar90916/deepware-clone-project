import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight gradient-text font-display">deepware</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#pagigen" className="story-link">Pagi Gen</a>
          <a href="#scanner" className="story-link">Deepware Scanner</a>
          <a href="#about" className="story-link">About Us</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" className="hover-scale">
            <a href="mailto:info@deepware.ai" aria-label="Contact Us">Contact Us</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
