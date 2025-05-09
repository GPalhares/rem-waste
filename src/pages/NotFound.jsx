import { useNavigate } from "react-router-dom";
import CustomButton from "../components/ui/CustomButton";
import { ArrowLeft, Github, Linkedin, Globe, Mail } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-6">
        Page Not Found
      </h2>

      <div className="max-w-2xl mb-8">
        <p className="text-[var(--color-foreground)] mb-4">
          This page represents a reimplementation of the previous Skip Hire
          Booking System. The interface and functionality were improved for a
          more modern, performant, and user-friendly experience.
        </p>
        <p className="text-[var(--color-foreground)] mb-4">
          Thank you for reviewing this challenge. If you’d like to explore more
          of my work or connect, check out the links below:
        </p>
        <div className="flex flex-col items-center gap-2">
          <a
            href="https://github.com/GPalhares"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--color-primary)] hover:underline"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/devpalhares/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--color-primary)] hover:underline"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://devpalhares.vercel.app/en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--color-primary)] hover:underline"
          >
            <Globe size={18} /> Portfolio
          </a>
          <a
            href="mailto:devpalhares@gmail.com"
            className="flex items-center gap-2 text-[var(--color-primary)] hover:underline"
          >
            <Mail size={18} /> devpalhares@gmail.com
          </a>
        </div>
      </div>

      <CustomButton
        onClick={() => navigate("/skip")}
        className="text-base py-3 px-6 flex items-center gap-2"
      >
        <ArrowLeft size={18} />
        <span>Return to Skip Selection</span>
      </CustomButton>
    </div>
  );
}
