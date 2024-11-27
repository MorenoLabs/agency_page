import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <Container>
        <div className="max-w-2xl mx-auto">
          <Card className="glass-card border-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-4 text-glow">Get in Touch</CardTitle>
              <CardDescription className="text-lg">
                Ready to transform your operations? Let's discuss how we can help your business grow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="First Name" className="bg-background/50" />
                  </div>
                  <div>
                    <Input placeholder="Last Name" className="bg-background/50" />
                  </div>
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="bg-background/50" />
                </div>
                <div>
                  <Input placeholder="Company" className="bg-background/50" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Tell us about your project" 
                    className="min-h-[120px] bg-background/50" 
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}