import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const caseStudies = [
  {
    title: "E-commerce Giant",
    metric: "45%",
    description: "Reduction in customer service response time through AI-powered automation",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
  },
  {
    title: "Tech Startup",
    metric: "300%",
    description: "Increase in operational efficiency after implementing our ML solutions",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  },
  {
    title: "Financial Services",
    metric: "60%",
    description: "Cost reduction in manual processes through intelligent automation",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold mb-4 text-glow">Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. See how we've helped businesses transform their operations.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <Card key={study.title} className="overflow-hidden group glass-card border-primary/10">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    {study.metric}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">{study.title}</h3>
                <p className="text-muted-foreground">{study.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}