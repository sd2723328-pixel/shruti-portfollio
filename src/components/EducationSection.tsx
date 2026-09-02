import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Education Timeline
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full mb-4" />
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            My formal computer applications education and foundational schooling that shaped my technical thinking.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EDUCATION_DATA.map((edu, index) => {
            const isBCA = edu.id === 'bca';

            return (
              <div
                key={edu.id}
                id={`education-card-${edu.id}`}
                className="relative group"
              >
                {/* Timeline Pin Node */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isBCA
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/40'
                      : 'bg-slate-900 border-slate-700 text-slate-400'
                  }`}
                >
                  <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>

                {/* Card */}
                <div 
                  className={`glass-card p-6 sm:p-8 rounded-2xl border transition-all ${
                    isBCA 
                      ? 'border-indigo-500/40 bg-gradient-to-br from-indigo-950/20 via-slate-900/70 to-slate-900/60 shadow-xl' 
                      : 'border-slate-800/90 hover:border-slate-700'
                  }`}
                >
                  {/* Top Bar: Degree, Period, Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {edu.degree}
                        </h3>
                        {isBCA && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Current Focus
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-indigo-400/90 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.gradeOrScore && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                          <Award className="w-3.5 h-3.5" />
                          <span>{edu.gradeOrScore}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Location & Status Info */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800/80">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      Status: <strong className="text-slate-300 font-medium">{edu.status}</strong>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Coursework Tags */}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Key Subjects &amp; Coursework:</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800/90 text-slate-300 text-xs hover:border-slate-700 transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights / Achievements */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/60">
                      <div className="space-y-1.5">
                        {edu.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
