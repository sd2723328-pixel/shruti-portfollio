import React, { useState } from 'react';
import { 
  Wrench, 
  Code, 
  Terminal, 
  Layers, 
  GitBranch, 
  Cpu, 
  Database, 
  Search,
  Check,
  Sparkles
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Frontend',
    'Programming',
    'Tools & Version Control',
    'Core CS & Databases'
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Layers className="w-4 h-4 text-indigo-400" />;
      case 'Programming':
        return <Code className="w-4 h-4 text-purple-400" />;
      case 'Tools & Version Control':
        return <GitBranch className="w-4 h-4 text-emerald-400" />;
      case 'Core CS & Databases':
        return <Database className="w-4 h-4 text-cyan-400" />;
      default:
        return <Wrench className="w-4 h-4 text-slate-400" />;
    }
  };

  const getBadgeColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20';
      case 'Programming':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/20';
      case 'Tools & Version Control':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
      case 'Core CS & Databases':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-4" />
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Languages, frameworks, tools, and computer science concepts learned through coursework, lab practice, and independent project building.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          {/* Categories Tabs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. C++, Git)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Info */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-indigo-500/40 transition-colors">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {skill.yearsOrAcademic}
                      </span>
                    </div>
                  </div>

                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeColor(skill.category)}`}>
                    {skill.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Progress / Proficiency bar */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-400 font-medium">Proficiency</span>
                  <span className="font-mono font-semibold text-indigo-400">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 glass-card rounded-2xl border border-slate-800 text-slate-400">
            <p>No skills found matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-3 text-xs text-indigo-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Highlighted Technical Summary Callout */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-indigo-500/20 bg-gradient-to-r from-indigo-950/30 via-slate-900/50 to-purple-950/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                BCA Curricular &amp; Practical Foundation
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Rigorous focus on core languages (C++, Java, Python), modern web stack (HTML, CSS, JS), and software version control (Git).
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-indigo-300 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
            <span>&gt; git commit -m &quot;keep-building&quot;</span>
          </div>
        </div>
      </div>
    </section>
  );
};
