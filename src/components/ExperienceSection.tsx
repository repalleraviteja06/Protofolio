import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";
import { useRef } from "react";

const timeline = [
  {
    type: "education" as const,
    title: "B.Tech - Computer Science & Engineering",
    org: "Lovely Professional University",
    period: "Aug 2023 - Present",
    location: "Punjab, India",
    detail: "CGPA: 5.8",
    desc: "Pursuing computer science with focus on software development, data structures, and web technologies.",
  },
  {
    type: "education" as const,
    title: "Intermediate (12th)",
    org: "Narayana Junior College",
    period: "Apr 2021 - Mar 2023",
    location: "Machilipatnam, AP",
    detail: "72%",
    desc: "Completed intermediate education with focus on Mathematics and Sciences.",
  },
  {
    type: "education" as const,
    title: "Matriculation (10th)",
    org: "Narayana E-Techno School",
    period: "Apr 2020 - Mar 2021",
    location: "Machilipatnam, AP",
    detail: "100%",
    desc: "Achieved perfect score in matriculation examinations.",
  },
];

const certs = [
  {
    title: "Digital Systems: From Logic Gates to Processors",
    provider: "Coursera",
    period: "Nov 2024 - Dec 2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/QMM0DRHP9G2W",
  },
  {
    title: "Packet Switching Networks and Algorithms",
    provider: "Coursera",
    period: "Oct 2024 - Nov 2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/SYGHXDWMLJHG",
  },
  {
    title: "Computer Communications Specialization",
    provider: "Coursera",
    period: "Sep 2024 - Nov 2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/XSM899GOBOWY",
  },
  {
    title: "Legacy Responsive Web Design",
    provider: "freeCodeCamp",
    period: "Aug 2023 - Nov 2023",
    link: "https://www.freecodecamp.org/certification/fcc00571dd2-f274-40b8-a765-72aed981c09f/responsive-web-design",
  },
];

const ExperienceSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section id="experience" ref={ref} className="overflow-hidden py-28">
      <div className="container max-w-5xl">
        <motion.div style={{ y }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-code uppercase tracking-widest text-accent">Experience & Education</p>
            <h2 className="mb-14 text-3xl font-bold md:text-5xl">
              My <span className="text-gradient">journey</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-14"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Award size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-code uppercase tracking-widest text-accent">Certificates</p>
                <h3 className="text-2xl font-bold text-foreground">Verified learning highlights</h3>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {certs.map((cert, i) => (
                <motion.a
                  key={cert.link}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:glow-primary"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                        {cert.title}
                      </p>
                      <p className="mt-1 text-sm font-code text-muted-foreground">
                        {cert.provider} • {cert.period}
                      </p>
                    </div>
                    <ExternalLink size={16} className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Open certificate credential</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-border" />

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
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2, duration: 0.4 }}
                    className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-primary/10"
                  >
                    <GraduationCap size={14} className="text-primary" />
                  </motion.div>

                  <div className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:glow-primary">
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      <span className="font-code">{item.period}</span>
                      <span className="text-border">•</span>
                      <MapPin size={12} />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-bold text-foreground transition-colors group-hover:text-primary">{item.title}</h3>
                    <p className="mb-1 text-sm font-code text-primary">{item.org} - {item.detail}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
