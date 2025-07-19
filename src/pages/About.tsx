import { motion } from "framer-motion";
import { Code, Palette, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building robust applications with modern technologies like React, Node.js, and Python.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensuring applications run smoothly and efficiently across all devices.",
    },
    {
      icon: Heart,
      title: "User-Centric Approach",
      description: "Always putting the user experience at the center of every design decision.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent opacity-20 animate-glow-pulse" />
              <div className="absolute inset-4 rounded-2xl glass flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Hello, I'm a Developer</h2>
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive applications that solve real-world problems. My journey 
              started with a curiosity about how websites work, and it has evolved into 
              a passion for crafting exceptional digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies. When I'm not coding, you can find me exploring 
              new design trends, contributing to open-source projects, or mentoring 
              aspiring developers.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full glass border-border/30 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <skill.icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};