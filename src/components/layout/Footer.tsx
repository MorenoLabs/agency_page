import { 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  MapPin, 
  Mail, 
  Phone,
  Send,
  MessageCircle
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

const socialLinks = [
  { 
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/morenolabs",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/morenolabs",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/morenolabs",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/morenolabs",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@morenolabs",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/morenolabs",
  },
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/morenolabs",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/37255550123",
  },
];

export function Footer() {
  return (
    <footer className="relative py-12 mt-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">MorenoLabs OÜ</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span>Sepapaja 6, Tallinn 15551, Estonia</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a 
                  href="mailto:info@morenolabs.ee" 
                  className="hover:text-primary transition-colors"
                >
                  info@morenolabs.ee
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a 
                  href="tel:+37255550123" 
                  className="hover:text-primary transition-colors"
                >
                  +372 5555 0123
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  AI/ML Integration
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  KPI Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Strategic Consulting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/press" className="text-muted-foreground hover:text-primary transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/50"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={`Follow us on ${social.name}`}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </Button>
            </a>
          ))}
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <span>© 2024 MorenoLabs OÜ. All rights reserved.</span>
            <span>Registry code: 14234567</span>
          </div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}