import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@example.com",
      href: "mailto:hello@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "San Francisco, CA",
      href: "https://maps.google.com",
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
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8">Send me a message</h2>
            <Card className="glass border-border/30">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="bg-secondary/50 border-border/30 focus:border-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="bg-secondary/50 border-border/30 focus:border-primary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-secondary/50 border-border/30 focus:border-primary/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Project Collaboration" 
                      className="bg-secondary/50 border-border/30 focus:border-primary/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project..." 
                      rows={6}
                      className="bg-secondary/50 border-border/30 focus:border-primary/50 resize-none"
                    />
                  </div>
                  
                  <Button className="w-full glow-primary group" size="lg">
                    <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group block"
                  >
                    <Card className="glass border-border/30 hover:border-primary/30 transition-all duration-300 hover-scale">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <info.icon size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{info.title}</h3>
                            <p className="text-muted-foreground group-hover:text-primary transition-colors">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <Card className="glass border-border/30 overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 animate-glow-pulse" />
                  <h3 className="text-xl font-bold mb-4">Let's work together!</h3>
                  <p className="text-muted-foreground">
                    I'm always excited to work on new projects and collaborate with talented individuals. 
                    Whether you have a specific project in mind or just want to chat about possibilities, 
                    I'd love to hear from you.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};