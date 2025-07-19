import { motion } from "framer-motion";
import { ChevronDown, Download, ExternalLink, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThreeScene } from "@/components/ThreeScene";
import { ParticleBackground } from "@/components/ParticleBackground";

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <ParticleBackground />
      <ThreeScene />
      
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            Hi, I'm{" "}
            <span className="gradient-text glow-text">
              Your Name
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            variants={itemVariants}
          >
            A passionate{" "}
            <span className="text-primary font-semibold">Full-Stack Developer</span>
            {" "}& <span className="text-accent font-semibold">UI/UX Designer</span>
            <br />
            crafting digital experiences that inspire and innovate
          </motion.p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 glow-primary"
            asChild
          >
            <a href="/projects">
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                View My Work
                <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
              </motion.span>
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-primary/30 hover:border-primary hover:bg-primary/10"
            asChild
          >
            <a href="/resume.pdf" download>
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Download size={18} className="group-hover:animate-bounce" />
                Download Resume
              </motion.span>
            </a>
          </Button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border/30 hover:border-primary/50 transition-all duration-300"
              aria-label={label}
            >
              <Icon size={24} className="text-muted-foreground hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }}
        >
          <ChevronDown size={32} className="text-muted-foreground hover:text-primary transition-colors mx-auto" />
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    </div>
  );
};