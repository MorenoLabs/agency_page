import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Financial Fraud Detection System",
    description: "Advanced ML-powered system that protects financial transactions in real-time, achieving 85% improvement in fraud prevention rates.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80",
    tags: ["Machine Learning", "Security", "Finance"],
    stats: [
      { label: "Fraud Prevention", value: "85%" },
      { label: "Response Time", value: "<100ms" },
      { label: "Accuracy Rate", value: "99.9%" },
    ],
    status: "Completed",
  },
  {
    title: "Smart City Infrastructure",
    description: "IoT sensor network and analytics platform enabling real-time monitoring and optimization of city resources.",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80",
    tags: ["IoT", "Smart City", "Data Analytics"],
    stats: [
      { label: "Energy Savings", value: "40%" },
      { label: "Data Points", value: "1M+" },
      { label: "City Coverage", value: "95%" },
    ],
    status: "Ongoing",
  },
  {
    title: "AI Customer Service Platform",
    description: "Intelligent platform that streamlines customer support with automated responses and predictive assistance.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
    tags: ["AI/ML", "Customer Service", "Analytics"],
    stats: [
      { label: "Response Time", value: "-60%" },
      { label: "Satisfaction", value: "94%" },
      { label: "Automation", value: "75%" },
    ],
    status: "Completed",
  },
  {
    title: "Supply Chain Optimization",
    description: "End-to-end supply chain solution utilizing AI and predictive analytics to optimize logistics and inventory.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    tags: ["Supply Chain", "AI", "Analytics"],
    stats: [
      { label: "Cost Reduction", value: "32%" },
      { label: "Efficiency", value: "+45%" },
      { label: "Accuracy", value: "99.5%" },
    ],
    status: "Ongoing",
  },
];

export function Projects() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-glow">Our Projects</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Transformative solutions that deliver measurable results across industries
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="glass-card overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 project-card-gradient" />
                <Badge 
                  variant={project.status === "Completed" ? "default" : "secondary"}
                  className="absolute top-3 right-3"
                >
                  {project.status}
                </Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-lg font-semibold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  className="w-full group"
                  variant="outline"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}