import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "Project Development and Management- BEL (Aerospace and Defence Electronics Company)",
      description: "At BEL, I was actively involved in the development and testing of the ADLSM system and contributed to key components of the Hex 1.2 Dev_Linkryptor project. My work included assisting with firmware verification, bug tracking, and documentation of development procedures...",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      tech: ["SAP Tool"],
    },
    {
      title: "Internship Task- 8Queens (Startup)",
      description: "During my internship at 8Queens Software Technologies Pvt Ltd, I completed a series of hands-on frontend development tasks...",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["HTML", "CSS", "Javascript", "PHP", "Laravel", "jQuery", "MySQL", "Tailwind CSS", "Bootstrap"],
      github: "https://github.com/mahesh13sankarie/Internship_Task",
    },
    {
      title: "Team Software Project- Solar Offset",
      description: "Solar Offset is a web application that enables users to fund solar panel installations in countries of their choice...",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Javascript", "CSS", "Stripe", "MySQL", "Chart.js"],
      github: "https://github.com/mahesh13sankarie/solar-offset-project",
    },
    {
      title: "Dissertation Project- SmartMenu App",
      description: "SmartMenu is a web-based mobile app that offers a multilingual, QR-enabled digital menu for contactless dining...",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Tailwind"],
      github: "https://github.com",
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-12 leading-tight gradient-text">
            My Experience
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
              className="group hover-scale"
            >
              <Card className="glass border-border/30 hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug break-words">
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
                    {project.title !== "Project Development and Management- BEL (Aerospace and Defence Electronics Company)" && (
                      <>
                        {project.github && (
                          <Button size="sm" variant="outline" className="flex-1" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github size={16} className="mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        <Button size="sm" className="flex-1" variant="default" disabled>
                          {project.title === "Dissertation Project- SmartMenu App" ? "Ongoing" : "Completed"}
                        </Button>
                      </>
                    )}
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
