import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import jobPortalImg from "@/assets/project-jobportal.jpg";
import portfolioImg from "@/assets/portfolio-preview.svg";
import touristImg from "@/assets/project-tourist.jpg";

const projects = [
  {
    title: "Job Portal",
    date: "Jan 2025 – May 2025",
    desc: "Streamlined job portal UI for job seekers and recruiters with responsive multi-page layouts, reusable components, and optimized loading flow.",
    fullDesc: "A comprehensive job portal application featuring role-based dashboards for job seekers and recruiters. Includes advanced search filters, responsive layouts, and a clean UX that guides users through the job application process seamlessly.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com/repalleraviteja06",
    demo: "",
    image: jobPortalImg,
  },
  {
    title: "Tourist Management System",
    date: "Aug 2023 – Dec 2023",
    desc: "Dynamic system with scalable modules, robust backend logic, and comprehensive testing for optimal performance.",
    fullDesc: "A full-featured tourist management platform with booking management, itinerary planning, and user authentication. Built with scalable architecture supporting multiple concurrent users and comprehensive testing cycles.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    github: "https://github.com/repalleraviteja06",
    demo: "",
    image: touristImg,
  },
  {
    title: "Portfolio Website",
    date: "2025",
    desc: "Modern developer portfolio with particle animations, smooth transitions, and dark/light theme support.",
    fullDesc: "A professional portfolio website built with React and Framer Motion featuring particle backgrounds, typing animations, parallax scrolling, and a fully responsive design with dark and light mode support.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/repalleraviteja06",
    demo: "",
    image: portfolioImg,
  },
];

type Project = typeof projects[0];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: "spring", damping: 25 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
    >
      {project.image && (
        <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>
      )}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
            <p className="text-sm font-code text-muted-foreground">{project.date}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-secondary transition-colors text-muted-foreground">
            <X size={20} />
          </button>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">{project.fullDesc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-code bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Github size={16} /> View Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-xl text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.15, duration: 0.6 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/30 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)] transition-all cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-secondary">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-4xl font-extrabold text-gradient opacity-30">{project.title[0]}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-code text-muted-foreground mt-0.5">{project.date}</p>
            </div>
            <div className="flex items-center gap-1">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink size={18} />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                aria-label={`${project.title} source code`}
              >
                <Github size={18} />
              </a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-code bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            View Details <ChevronRight size={14} />
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
};

const ProjectsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  return (
    <section id="projects" ref={ref} className="py-28 overflow-hidden">
      <div className="container max-w-5xl">
        <motion.div style={{ y }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-code text-accent tracking-widest uppercase mb-3">Projects</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-14">
              What I've <span className="text-gradient">built</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
