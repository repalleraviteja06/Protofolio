import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";
import { useRef } from "react";

const timeline = [
  {
    type: "education" as const,
    title: "B.Tech - Computer Science & Engineering",
    org: "Lovely Professional University",
    period: "Aug 2023 – Present",
    location: "Punjab, India",
    detail: "CGPA: 5.8",
    desc: "Pursuing computer science with focus on software development, data structures, and web technologies.",
  },
  {
    type: "education" as const,
    title: "Intermediate (12th)",
    org: "Narayana Junior College",
    period: "Apr 2021 – Mar 2023",
    location: "Machilipatnam, AP",
    detail: "72%",
    desc: "Completed intermediate education with focus on Mathematics and Sciences.",
  },
  {
    type: "education" as const,
    title: "Matriculation (10th)",
    org: "Narayana E-Techno School",
    period: "Apr 2020 – Mar 2021",
    location: "Machilipatnam, AP",
    detail: "100%",
    desc: "Achieved perfect score in matriculation examinations.",
  },
];

const certs = [
  {
    title: "Digital Systems: From Logic Gates to Processors",
    provider: "Coursera",
    period: "Nov 2024 – Dec 2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/QMM0DRHP9G2W",
  },
  {
    title: "Packet Switching Networks and Algorithms",
    provider: "Coursera",
    period: "Oct 2024 – Nov 2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/SYGHXDWMLJHG",
  },
  {
    title: "Computer Communications Specialization",
    provider: "Coursera",
    period: "Sep 2024 – Nov 2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/XSM899GOBOWY",
  },
  {
    title: "Legacy Responsive Web Design",
    provider: "freeCodeCamp",
    period: "Aug 2023 – Nov 2023",
    link: "https://www.freecodecamp.org/certification/fcc00571dd2-f274-40b8-a765-72aed981c09f/responsive-web-design",
  },
];

const ExperienceSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section id="experience" ref={ref} className="py-28 overflow-hidden">
      <div className="container max-w-5xl">
        <motion.div style={{ y }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-code text-accent tracking-widest uppercase mb-3">Experience & Education</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-14">
              My <span className="text-gradient">journey</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Timeline */}
            <div className="md:col-span-3 relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.2, duration: 0.4 }}
                      className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center"
                    >
                      <GraduationCap size={14} className="text-primary" />
                    </motion.div>

                    <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:glow-primary transition-all group">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar size={12} />
                        <span className="font-code">{item.period}</span>
                        <span className="text-border">•</span>
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-primary font-code mb-1">{item.org} — {item.detail}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="md:col-span-2"
            >
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:glow-primary transition-all sticky top-28">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award size={16} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">Certifications</h3>
                </div>
                <div className="space-y-4">
                  {certs.map((cert, i) => (
                    <motion.a
                      key={i}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      className="flex items-start gap-3 group cursor-pointer"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0 group-hover:scale-150 transition-transform" />
                      <div>
                        <p className="text-sm text-foreground group-hover:text-primary transition-colors font-medium flex items-center gap-1.5">
                          {cert.title}
                          <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </p>
                        <p className="text-xs text-muted-foreground font-code">{cert.provider} • {cert.period}</p>
                      </div>
                    </motion.a>
                  ))}
              </div>
            </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
