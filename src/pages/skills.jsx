import { motion } from "framer-motion";
import { Code, Database, Server, LayoutGrid, Smartphone, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Proficient in HTML5, CSS3, Tailwind CSS, Bootstrap, JavaScript, jQuery and React.js.",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Experienced with Python, Django, PHP, Laravel, Node.js and Express.js, for server-side logic.",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Comfortable working with MongoDB and MySQL.",
    },
    {
      icon: LayoutGrid,
      title: "UI/UX Design",
      description: "Designing intuitive interfaces using Figma and web styling libraries.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Creating fully responsive web apps that work across all screen sizes.",
    },
    {
      icon: Settings,
      title: "Tools & DevOps",
      description: "Using Git, Docker, Gitlab, GitHub Actions, and project management tools like Jira.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-10 gradient-text">
            Skills</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These are the technical and creative skills I’ve developed through hands-on experience and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
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
      </div>
    </div>
  );
};
