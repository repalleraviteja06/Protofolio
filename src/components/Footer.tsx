import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Repalle Ravi Teja. Built with passion & React.
      </p>
      <div className="flex items-center gap-3">
        {[
          { icon: Github, href: "https://github.com/repalleraviteja06" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/repalleraviteja06/" },
          { icon: Mail, href: "mailto:raviteja.repalle12434@gmail.com" },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
