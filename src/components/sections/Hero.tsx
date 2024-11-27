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
            Pioneering XAI solutions and technological initiatives that transform industries and drive innovation forward. Moonshining and Trystorming
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