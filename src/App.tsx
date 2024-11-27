import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Projects } from "@/components/sections/Projects";
import { ThinkTank } from "@/components/sections/ThinkTank";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground relative">
        <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
        <div className="fixed inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background pointer-events-none" />
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Hero />
            <Services />
            <Solutions />
            <Projects />
            <ThinkTank />
            <CaseStudies />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}