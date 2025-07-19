import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["React", "Firebase", "TypeScript", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning dashboard for data visualization and predictive analytics. Built with Python backend and React frontend.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Python", "React", "TensorFlow", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      title: "Social Media Platform",
      description: "A modern social media platform with real-time messaging, post sharing, and advanced privacy controls.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tech: ["Next.js", "MongoDB", "Socket.io", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency tracking app with portfolio management, price alerts, and market analysis tools.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Express", "Redis", "WebSocket"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Design System Library",
      description: "A comprehensive design system with reusable components, documentation, and theming capabilities for enterprise applications.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      tech: ["React", "Storybook", "Styled Components", "TypeScript"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, mobile apps, and creative experiments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group hover-scale ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Card className="h-full glass border-border/30 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-accent text-accent-foreground">
                        <Zap size={12} className="mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};