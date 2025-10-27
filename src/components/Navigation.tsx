import { Link, useLocation } from "react-router-dom";
import { Home, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          JobEEE
        </h1>
        <div className="flex gap-2">
          <Link to="/">
            <Button
              variant={location.pathname === "/" ? "default" : "ghost"}
              size="sm"
              className="rounded-full"
            >
              <Home className="h-5 w-5 mr-2" />
              Feed
            </Button>
          </Link>
          <Link to="/profile">
            <Button
              variant={location.pathname === "/profile" ? "default" : "ghost"}
              size="sm"
              className="rounded-full"
            >
              <User className="h-5 w-5 mr-2" />
              Profile
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
