import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { useScrollTo } from "@/hooks/useScrollTo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const scrollTo = useScrollTo();

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-background/20 backdrop-blur-xl" />
      <Container className="relative flex h-20 items-center justify-between">
        <div className="flex items-center gap-12">
          <a 
            href="#" 
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="font-bold text-3xl text-primary text-glow">
              MorenoLabs
            </span>
          </a>
          <nav className="hidden md:flex gap-8">
            <a 
              href="#services" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('services');
              }}
            >
              Services
            </a>
            <a 
              href="#solutions" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('solutions');
              }}
            >
              Solutions
            </a>
            <a 
              href="#projects" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('projects');
              }}
            >
              Projects
            </a>
            <a 
              href="#think-tank" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('think-tank');
              }}
            >
              Think Tank
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="hidden md:inline-flex border-primary/20 hover:bg-primary/20"
            onClick={() => scrollTo('contact')}
          >
            Get Started
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4">
                <a 
                  href="#services" 
                  className="text-sm font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('services');
                  }}
                >
                  Services
                </a>
                <a 
                  href="#solutions" 
                  className="text-sm font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('solutions');
                  }}
                >
                  Solutions
                </a>
                <a 
                  href="#projects" 
                  className="text-sm font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('projects');
                  }}
                >
                  Projects
                </a>
                <a 
                  href="#think-tank" 
                  className="text-sm font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('think-tank');
                  }}
                >
                  Think Tank
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}