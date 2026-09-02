import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  FileText, 
  Terminal, 
  Sparkles, 
  MapPin, 
  GraduationCap,
  Code,
  Download,
  FolderGit2
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface HeroSectionProps {
  profile: ProfileInfo;
  onOpenResume: () => void;
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onOpenResume,
  onContactClick,
  onProjectsClick
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        {/* Status / Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-indigo-950/40 backdrop-blur-md animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{profile.status}</span>
        </div>

        {/* Name & Display Title */}
        <h1 
          id="hero-name"
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]"
        >
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200">
            {profile.name}
          </span>
        </h1>

        <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
          <span className="text-indigo-400 font-mono font-medium text-lg sm:text-xl">
            &lt;
          </span>
          <span id="hero-title" className="tracking-tight text-slate-200">
            {profile.title}
          </span>
          <span className="text-indigo-400 font-mono font-medium text-lg sm:text-xl">
            /&gt;
          </span>
        </div>

        {/* Short Introduction Paragraph */}
        <p 
          id="hero-intro"
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-8 font-normal"
        >
          {profile.subtitle} {profile.bio}
        </p>

        {/* Quick Highlights Info Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-400 mb-10">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span>Bachelor of Computer Applications</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Full-Stack & DSA Enthusiast</span>
          </div>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* View My Projects Button */}
          <button
            id="hero-projects-btn"
            onClick={onProjectsClick}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
          >
            <FolderGit2 className="w-5 h-5 text-indigo-200" />
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Contact Me Button */}
          <button
            id="hero-contact-btn"
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/50 hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Contact Me</span>
          </button>

          {/* Download Resume Button */}
          <button
            id="hero-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base text-slate-300 bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Download className="w-4 h-4 text-purple-400" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Social Links & Terminal Pill */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-400">
          <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold font-mono">
            Connect with me:
          </span>
          <div className="flex items-center gap-3">
            <a
              id="hero-github-link"
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white hover:bg-slate-800 transition-all shadow-sm hover:scale-105"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              id="hero-linkedin-link"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white hover:bg-slate-800 transition-all shadow-sm hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              id="hero-email-link"
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white hover:bg-slate-800 transition-all shadow-sm hover:scale-105"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
