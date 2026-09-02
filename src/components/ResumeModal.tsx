import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  GraduationCap, 
  Code, 
  Briefcase, 
  Award,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProfileInfo } from '../types';
import { EDUCATION_DATA, PROJECTS_DATA, CERTIFICATES_DATA, SKILLS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
  onShowToast: (message: string, type?: 'success' | 'info' | 'error') => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  onShowToast
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrintOrDownload = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
    window.print();
    onShowToast('Preparing resume print / PDF download...', 'info');
  };

  const handleCopyText = () => {
    const resumeText = `
SHRUTI DAS
BCA Student & Aspiring Web Developer
Email: ${profile.email} | Location: ${profile.location}
GitHub: ${profile.githubUrl} | LinkedIn: ${profile.linkedinUrl}

PROFESSIONAL SUMMARY:
${profile.detailedBio}

EDUCATION:
- ${EDUCATION_DATA[0].degree} | ${EDUCATION_DATA[0].institution} (${EDUCATION_DATA[0].period}) - ${EDUCATION_DATA[0].gradeOrScore}
- ${EDUCATION_DATA[1].degree} | ${EDUCATION_DATA[1].institution} (${EDUCATION_DATA[1].period}) - ${EDUCATION_DATA[1].gradeOrScore}

TECHNICAL SKILLS:
- Web Technologies: HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Responsive Design
- Programming Languages: C++, Python, Java
- Tools & Version Control: Git, GitHub, VS Code
- Core Computer Science: Data Structures & Algorithms, Object-Oriented Programming, DBMS & SQL

KEY PROJECTS:
${PROJECTS_DATA.slice(0, 4).map(p => `• ${p.title} (${p.technologies.join(', ')})\n  ${p.description}`).join('\n\n')}

CERTIFICATIONS:
${CERTIFICATES_DATA.map(c => `• ${c.title} - ${c.issuer} (${c.issueDate})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    onShowToast('Resume plain text copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Controls Header (Hidden during Print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090D16]/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Shruti Das - Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-400">
                Official BCA Academic &amp; Developer Resume
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Copy formatted text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">Copy Text</span>
            </button>

            <button
              id="download-resume-pdf-btn"
              onClick={handlePrintOrDownload}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
              title="Save as PDF or Print"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-900/40 text-slate-200 text-sm leading-relaxed">
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-700/80">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
              {profile.name}
            </h1>
            <p className="text-sm font-semibold text-indigo-400 mb-3">
              {profile.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                {profile.email}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {profile.location}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-indigo-400" />
                github.com/shrutidas-dev
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                linkedin.com/in/shruti-das-bca
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1 mb-2.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {profile.detailedBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-xs text-indigo-300 font-normal">{edu.period}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 text-xs mt-0.5">
                    <span>{edu.institution}, {edu.location}</span>
                    <span className="font-semibold text-emerald-400">{edu.gradeOrScore}</span>
                  </div>
                  {edu.coursework && (
                    <p className="text-xs text-slate-400 mt-1">
                      <strong className="text-slate-300">Relevant Coursework:</strong> {edu.coursework.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1 mb-2.5">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>
                <strong className="text-white">Web Technologies:</strong>{' '}
                <span className="text-slate-300">HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Responsive Web Design</span>
              </div>
              <div>
                <strong className="text-white">Programming Languages:</strong>{' '}
                <span className="text-slate-300">C++, Python, Java</span>
              </div>
              <div>
                <strong className="text-white">Version Control &amp; Developer Tools:</strong>{' '}
                <span className="text-slate-300">Git, GitHub, VS Code, Browser DevTools, Postman</span>
              </div>
              <div>
                <strong className="text-white">Computer Science Fundamentals:</strong>{' '}
                <span className="text-slate-300">Data Structures &amp; Algorithms, Object-Oriented Programming (OOP), DBMS &amp; SQL, Operating Systems</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1 mb-3">
              Academic &amp; Personal Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.slice(0, 4).map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white">
                    <span>{proj.title}</span>
                    <span className="font-mono text-xs text-indigo-300 font-normal">{proj.date}</span>
                  </div>
                  <p className="text-xs text-slate-400 italic mb-1">
                    Tech Stack: {proj.technologies.join(', ')}
                  </p>
                  <p className="text-xs text-slate-300 mb-1.5">
                    {proj.description}
                  </p>
                  {proj.keyFeatures && (
                    <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5 ml-1">
                      {proj.keyFeatures.slice(0, 2).map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1 mb-2.5">
              Certifications &amp; Credentials
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {CERTIFICATES_DATA.map((c) => (
                <li key={c.id} className="flex items-start justify-between gap-2">
                  <span>&bull; <strong className="text-white">{c.title}</strong> &mdash; {c.issuer}</span>
                  <span className="font-mono text-slate-400 shrink-0">{c.issueDate}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="no-print p-4 border-t border-slate-800 bg-[#090D16]/90 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Updated for 2024–2025 Internship Season</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
