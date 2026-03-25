import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Java", level: 85, category: "Languages" },
  { name: "Python", level: 75, category: "Languages" },
  { name: "JavaScript", level: 80, category: "Languages" },
  { name: "C", level: 70, category: "Languages" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "PHP", level: 65, category: "Backend" },
  { name: "MySQL", level: 75, category: "Database" },
  { name: "MongoDB", level: 65, category: "Database" },
  { name: "DBMS", level: 80, category: "Database" },
  { name: "Git", level: 75, category: "Tools" },
  { name: "Problem Solving", level: 85, category: "Soft Skills" },
  { name: "Teamwork", level: 90, category: "Soft Skills" },
];

const categories = ["Languages", "Frontend", "Backend", "Database", "Tools", "Soft Skills"];

const SkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    className="group"
  >
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
        {skill.name}
      </span>
      <span className="text-xs font-code text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
      </motion.div>
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  return (
    <section id="skills" ref={ref} className="py-28 overflow-hidden">
      <div className="container max-w-5xl">
        <motion.div style={{ y }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-code text-accent tracking-widest uppercase mb-3">Skills</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-14">
              My <span className="text-gradient">tech stack</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {categories.map((cat) => {
              const catSkills = skills.filter((s) => s.category === cat);
              if (catSkills.length === 0) return null;
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xs font-code text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-primary/50" />
                    {cat}
                  </h3>
                  <div className="space-y-3">
                    {catSkills.map((skill, i) => (
                      <SkillBar key={skill.name} skill={skill} index={i} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
