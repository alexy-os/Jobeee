import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Info, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const links = [
    { href: "/", label: "Feed", icon: Home },
    { href: "/organizations", label: "Jobs", icon: Briefcase },
    { href: "/about", label: "About", icon: Info },
    { href: "/profile", label: "Profile", icon: User },
  ];

  const NavLinks = ({ mobile = false }) => (
    <div className={mobile ? "flex flex-col gap-2" : "flex gap-2"}>
      {links.map(({ href, label, icon: Icon }) => (
        <Link key={href} to={href}>
          <Button
            variant={location.pathname === href ? "default" : "ghost"}
            size="sm"
            className={mobile ? "w-full justify-start" : "rounded-full"}
            onClick={() => mobile && setOpen(false)}
          >
            <Icon className="h-5 w-5 mr-2" />
            {label}
          </Button>
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          JobEEE
        </h1>

        {/* Desktop Navigation */}
        {!isMobile && <NavLinks />}

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-4 mt-8">
                <h2 className="font-semibold text-lg px-2">Menu</h2>
                <NavLinks mobile={true} />
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
};
