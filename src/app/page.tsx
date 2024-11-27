import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section id="services">
        {/* Services content */}
      </section>
      <section id="solutions">
        {/* Solutions content */}
      </section>
      <section id="projects">
        {/* Projects content */}
      </section>
      <section id="think-tank">
        {/* Think Tank content */}
      </section>
    </main>
  );
}

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

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { useScrollTo } from "@/hooks/useScrollTo";

export function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section className="relative pt-32 pb-24 md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-primary/30 rounded-full blur-[160px] animate-glow" />
      </div>
      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-glow">
            Innovating the Future of Technology
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Pioneering XAI solutions and technological initiatives that transform industries and drive innovation forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="group text-lg h-14 px-8 bg-primary hover:bg-primary/90"
              onClick={() => scrollTo('solutions')}
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg h-14 px-8 border-primary/20 hover:bg-primary/20"
              onClick={() => scrollTo('projects')}
            >
              Our Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}