import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { ArrowRight, Bot, Cloud, Shield, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "AI-Powered Analytics",
    description: "Advanced analytics solutions using machine learning to uncover actionable insights from your data.",
    icon: Bot,
    features: ["Predictive Analytics", "Pattern Recognition", "Automated Reporting"],
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions designed for modern enterprise needs.",
    icon: Cloud,
    features: ["Multi-Cloud Strategy", "Cloud Migration", "Performance Optimization"],
  },
  {
    title: "Security Solutions",
    description: "Comprehensive security measures to protect your digital assets and data.",
    icon: Shield,
    features: ["Threat Detection", "Compliance Management", "Security Audits"],
  },
  {
    title: "Workflow Automation",
    description: "Streamline your business processes with intelligent automation solutions.",
    icon: Workflow,
    features: ["Process Mapping", "Custom Workflows", "Integration Services"],
  },
];

export function Solutions() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-glow">Our Solutions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge solutions designed to transform your business and drive innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.title} className="glass-card p-6 group">
              <solution.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-muted-foreground mb-6">{solution.description}</p>
              <ul className="space-y-3 mb-8">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Learn More</Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}