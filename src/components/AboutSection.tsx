import React from 'react';
import { 
  User, 
  Code2, 
  Sparkles, 
  BookOpen, 
  Compass, 
  Laptop, 
  Layers, 
  Terminal, 
  CheckCircle,
  Lightbulb,
  Cpu,
  Globe2
} from 'lucide-react';
import { ProfileInfo } from '../types';
import { HIGHLIGHTS_METRICS } from '../data/portfolioData';

interface AboutSectionProps {
  profile: ProfileInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Subtle Accent */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4" />
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Get to know my academic background, technical passions, and what drives my pursuit of software development.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio & Core Narrative (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    BCA Student & Lifelong Technologist
                  </h3>
                  <p className="text-xs text-indigo-300/80 font-mono">
                    Undergraduate &bull; Computer Applications
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">{profile.name}</strong>, a Bachelor of Computer Applications (BCA) student with a passion for software craftsmanship. My academic path has equipped me with strong analytical thinking, structured problem-solving skills, and a deep understanding of core Computer Science principles.
                </p>
                <p>
                  My primary technical interests lie in <span className="text-indigo-300 font-medium">Front-End & Modern Web Development</span>, <span className="text-purple-300 font-medium">Object-Oriented Programming (OOP)</span>, and <span className="text-emerald-300 font-medium">Data Structures & Algorithms</span>. I enjoy translating real-world problems into clean, well-tested, and performant code.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Whether crafting modular user interfaces with HTML, CSS, and modern JavaScript, solving algorithmic puzzles in C++ and Python, or organizing data architectures with SQL and Java, I am driven by the thrill of building things that make an impact.
                </p>
              </div>

              {/* What drives me checklist */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clean Code & Modularity</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Collaborative Git Workflows</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Responsive & Accessible UI</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Continuous Daily Learning</span>
                </div>
              </div>
            </div>

            {/* Core Interests Badges Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800/90 shadow-xl">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Primary Technical Interests</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {profile.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/60 text-slate-200 text-xs sm:text-sm font-medium hover:border-indigo-500/50 hover:bg-slate-800/90 transition-all cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Stats & Domain Pillars (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS_METRICS.slice(0, 4).map((metric, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-xl border border-slate-800 text-center hover:border-slate-700 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-indigo-400 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Focus Cards */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800/90 shadow-xl flex flex-col gap-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Academic & Practical Focus</span>
              </h4>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">
                      Modern Web Technologies
                    </h5>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Building fluid, component-driven responsive web interfaces with HTML5, CSS3, ES6+ JavaScript, and modern styling libraries.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">
                      Algorithms & Core Programming
                    </h5>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Writing optimized code in C++, Python, and Java with strong attention to time complexity and modular object orientation.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">
                      Version Control & Team Workflows
                    </h5>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Utilizing Git and GitHub for branch management, code reviews, documentation, and continuous project tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
