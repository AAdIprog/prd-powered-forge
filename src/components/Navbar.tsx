import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Trophy, Calendar, Target, Users, Bell } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: "/", label: "Home", icon: Code2 },
    { path: "/contests", label: "Contests", icon: Calendar },
    { path: "/dashboard", label: "Dashboard", icon: Target },
    { path: "/leaderboard", label: "Leaderboard", icon: Trophy },
    { path: "/problem-of-day", label: "POTD", icon: Target },
  ];
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero">
            <Code2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="bg-gradient-hero bg-clip-text text-transparent">CP Club</span>
        </Link>
        
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.path}
                asChild
                variant={isActive(item.path) ? "default" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Link to={item.path}>
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </Button>
            );
          })}
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-accent"></span>
          </Button>
          <Button variant="outline" size="sm">
            <Users className="h-4 w-4 mr-2" />
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
