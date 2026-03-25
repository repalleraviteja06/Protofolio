import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, GraduationCap, Code2, Briefcase } from "lucide-react";
import { useRef } from "react";

const highlights = [
  { icon: GraduationCap, label: "B.Tech CSE", detail: "LPU, Punjab" },
  { icon: Code2, label: "Full Stack", detail: "Java, React, Node" },
  { icon: Briefcase, label: "Projects", detail: "5+ Completed" },
  { icon: MapPin, label: "India", detail: "Open to Remote" },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section id="about" ref={ref} className="py-28 overflow-hidden">
      <div className="container max-w-5xl">
        <motion.div style={{ y }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-sm font-code text-accent tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A passionate <span className="text-gradient">developer</span> who loves building things
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile image with floating animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto"
            >
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative w-64 h-64 md:w-80 md:h-80"
              >
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 border border-primary/20 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl md:text-9xl font-extrabold text-gradient opacity-30">RT</div>
                </div>
                {/* Orbital ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="absolute -inset-4 border border-dashed border-primary/20 rounded-2xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="absolute -inset-8 border border-dashed border-accent/10 rounded-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Info */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-muted-foreground leading-relaxed mb-8 text-base"
              >
                I'm a Computer Science student at Lovely Professional University with a passion for 
                building clean, efficient web applications. I specialize in full-stack development 
                using modern technologies like React, Node.js, and Java. I'm constantly learning and 
                looking for opportunities to grow as a software engineer.
              </motion.p>

              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:glow-primary transition-all group"
                  >
                    <item.icon size={20} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
