import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Lightbulb, Rocket, Target } from "lucide-react";

const insights = [
  {
    title: "Future of Work",
    description: "Exploring how AI and automation will reshape the workplace of tomorrow.",
    icon: Brain,
    category: "Future Trends"
  },
  {
    title: "Innovation Lab",
    description: "Experimental projects pushing the boundaries of technology.",
    icon: Lightbulb,
    category: "Innovation"
  },
  {
    title: "Tech Horizons",
    description: "Emerging technologies that will define the next decade.",
    icon: Rocket,
    category: "Technology"
  },
  {
    title: "Strategic Foresight",
    description: "Long-term vision and strategic planning for technological advancement.",
    icon: Target,
    category: "Strategy"
  }
];

export function ThinkTank() {
  return (
    <section id="think-tank" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
      <Container className="relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-glow">Think Tank</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring breakthrough ideas and emerging technologies that shape the future of innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight) => (
            <Card key={insight.title} className="glass-card group hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-6">
                  <Badge variant="outline" className="mb-4">
                    {insight.category}
                  </Badge>
                  <insight.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {insight.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}