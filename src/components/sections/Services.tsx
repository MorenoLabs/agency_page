import { Brain, BarChart3, Settings, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";

const services = [
  {
    title: "AI/ML Integration",
    description: "Implement cutting-edge artificial intelligence and machine learning solutions to automate decision-making and predict customer needs.",
    icon: Brain,
  },
  {
    title: "Process Automation",
    description: "Streamline operations and reduce manual work through intelligent automation of repetitive tasks and workflows.",
    icon: Settings,
  },
  {
    title: "KPI Optimization",
    description: "Define, track, and optimize key performance indicators to drive continuous improvement and business growth.",
    icon: BarChart3,
  },
  {
    title: "Strategic Consulting",
    description: "Expert guidance on operational strategy, technology adoption, and organizational transformation.",
    icon: Users,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <Container>
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">Our Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to transform your business operations
            and drive sustainable growth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="glass-card p-6 md:p-8 rounded-2xl group hover:border-primary/30 transition-all duration-300"
            >
              <service.icon className="h-12 w-12 mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}