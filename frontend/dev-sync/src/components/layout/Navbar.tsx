
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, BookOpen, FileText, HelpCircle, User, Menu, X } from "lucide-react";

const navItems = [
  { name: "Code Debugger", path: "/debugger", icon: Code },
        { name: "Learning Path", path: "/learning", icon: BookOpen },
  
         { name: "Resume Generator", path: "/resume", icon: FileText },
                { name: "Quiz Section", path: "/quiz", icon: HelpCircle },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold flex items-center gap-2"
        >
          <span className="text-primary">DevSync</span>
        
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-primary bg-primary/5"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
      
          <Button size="sm" variant="outline" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-9 w-9"
          >
       {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
    </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-border/50 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
       key={item.name}
                  to={item.path}    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                ? "text-primary bg-primary/5"
              : "text-foreground/70 hover:text-primary hover:bg-primary/5"
         }`}
                >
        <Icon size={18} />
             <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="pt-2 flex flex-col space-y-2">
             <Button size="sm" variant="outline" asChild className="justify-start">
          <Link to="/login" className="flex items-center gap-3">
             <User size={18} />
            <span>Log in</span>
                </Link>
         </Button>
         <Button size="sm" asChild className="justify-start">
                <Link to="/signup" className="flex items-center gap-3">
                  <User size={18} />
                  <span>Sign up</span>
        </Link>
              </Button>
         </div>    </div>
        </div>
      )}
    </header>
  );
}