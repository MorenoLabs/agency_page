import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

const posts = [
  {
    title: "The Future of AI in Business Operations",
    excerpt: "Explore how artificial intelligence is reshaping business operations and what it means for the future of work.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    author: "Maria Chen",
    date: "2024-03-15",
    category: "AI & Technology",
    readTime: "5 min read",
  },
  {
    title: "Building Scalable Cloud Infrastructure",
    excerpt: "Learn the best practices for designing and implementing scalable cloud infrastructure for enterprise applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    author: "Alex Thompson",
    date: "2024-03-10",
    category: "Cloud Computing",
    readTime: "8 min read",
  },
  {
    title: "Data-Driven Decision Making",
    excerpt: "How to leverage data analytics to make better business decisions and drive growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    author: "Sarah Miller",
    date: "2024-03-05",
    category: "Analytics",
    readTime: "6 min read",
  },
];

export function Blog() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-glow">Latest Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest thoughts on technology, innovation, and digital transformation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="glass-card overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge>{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{post.author}</span>
                  <span className="text-muted-foreground">
                    {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}