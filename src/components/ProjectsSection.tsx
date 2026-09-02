import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Eye, 
  Code2, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Web Development', 'Programming / DSA', 'Academic Project'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Projects &amp; Builds
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4" />
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            A selection of academic capstones, web applications, and algorithmic tools I designed and developed.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="glass-card glass-card-hover rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Header / Decorative Banner */}
              <div className={`p-6 bg-gradient-to-br ${project.gradient} border-b border-slate-800/80 relative`}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900/90 text-indigo-300 border border-slate-700/60">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1 font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Highlights list */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="mb-5 space-y-1.5">
                      {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: GitHub & Demo & Details */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {/* GitHub Button */}
                      <a
                        id={`project-github-btn-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 transition-all hover:border-slate-700"
                        title="View Source Code on GitHub"
                      >
                        <Github className="w-4 h-4 text-slate-400" />
                        <span>Code</span>
                      </a>

                      {/* Live Demo Button */}
                      {project.liveUrl && (
                        <a
                          id={`project-demo-btn-${project.id}`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-indigo-300 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 transition-all"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>

                    {/* Quick Details Trigger */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 py-2 px-1 transition-colors cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
