/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PORTFOLIO } from '../data';
import { Project } from '../types';
import LucideIcon from './LucideIcon';

interface PortfolioGridProps {
  limit?: number;
  onBookClick: (tag: string) => void;
}

export default function PortfolioGrid({ limit, onBookClick }: PortfolioGridProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'ads' | 'web' | 'analytics'>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const tabs = [
    { label: 'All Operations', id: 'all' },
    { label: 'Ad Funnels & Video', id: 'ads' },
    { label: 'Web Construction', id: 'web' },
    { label: 'SEO Campaigning', id: 'analytics' }
  ];

  // Filtering Logic
  const filteredProjects = PORTFOLIO.filter((project) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'ads') {
      return (
        project.category.toLowerCase().includes('ads') || 
        project.category.toLowerCase().includes('video')
      );
    }
    if (activeTab === 'web') {
      return (
        project.category.toLowerCase().includes('web') || 
        project.tags.includes('React & Tailwind')
      );
    }
    if (activeTab === 'analytics') {
      return (
        project.category.toLowerCase().includes('seo') || 
        project.tags.includes('Local SEO')
      );
    }
    return true;
  });

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const toggleProjectExpansion = (id: string) => {
    if (selectedProjectId === id) {
      setSelectedProjectId(null);
    } else {
      setSelectedProjectId(id);
    }
  };

  return (
    <div id="portfolio-interactive-grid-container" className="space-y-10">
      
      {/* Category Tabs Header */}
      {!limit && (
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-brand-dark/40 p-1.5 rounded-xl border border-brand-border/30 max-w-xl mx-auto" id="portfolio-filter-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setSelectedProjectId(null); // Reset detail expansion on changing tab
              }}
              id={`portfolio-tab-btn-${tab.id}`}
              className={`px-4 py-2 text-xs font-semibold font-mono rounded-lg transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-primary text-brand-dark shadow-[0_0_15px_rgba(0,147,213,0.3)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Main Grid mapping */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="portfolio-items-grid">
        {displayProjects.map((project) => {
          const isExpanded = selectedProjectId === project.id;
          return (
            <div
              key={project.id}
              id={`portfolio-project-card-${project.id}`}
              className={`group relative rounded-2xl border bg-brand-card/40 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                isExpanded 
                  ? 'border-brand-secondary shadow-[0_0_30px_rgba(0,181,255,0.1)]' 
                  : 'border-brand-border/40 hover:border-brand-primary/40'
              }`}
            >
              
              {/* Dynamic top highlight block */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-70" />

              <div className="p-6 md:p-8 flex-1">
                
                {/* Meta details header bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#00B5FF] tracking-widest uppercase font-bold">
                    {project.category}
                  </span>
                  
                  {/* Performance stats pill */}
                  <div className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-405 border border-emerald-500/20">
                    {project.achievement}
                  </div>
                </div>

                {/* Main Client Type & Title */}
                <div className="space-y-1 mb-3">
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-brand-secondary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans flex items-center">
                    <LucideIcon name="Briefcase" className="mr-1.5 text-slate-500" size={12} />
                    Target Group: <span className="text-slate-300 ml-1 font-semibold">{project.clientType}</span>
                  </p>
                </div>

                {/* Short Case Summary paragraph */}
                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-5">
                  {project.summary}
                </p>

                {/* Render tags */}
                <div className="flex flex-wrap gap-1.5 mb-6" id={`project-tags-${project.id}`}>
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded text-[10px] font-mono font-medium bg-slate-900 border border-brand-border/45 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Detail expansion block */}
                {isExpanded && (
                  <div 
                    className="mt-6 pt-6 border-t border-brand-border/50 space-y-4 animate-in fade-in slide-in-from-top-1"
                    id={`case-study-expanded-meta-${project.id}`}
                  >
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Client Challenge:
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00B5FF] mb-1.5">
                        Orbitaxia Intervention:
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {project.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-420 mb-2 flex items-center">
                        <LucideIcon name="Sparkles" className="mr-1.5 text-emerald-430" size={12} />
                        Measurable Accomplishments:
                      </h4>
                      <ul className="space-y-1.5">
                        {project.results.map((res, rIdx) => (
                          <li key={rIdx} className="flex items-start text-xs text-slate-300 font-sans">
                            <span className="text-emerald-500 mr-2 shrink-0">✓</span>
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

              </div>

              {/* Action bar and trigger node */}
              <div className="px-6 md:px-8 py-5 border-t border-brand-border/30 bg-[#0E1729]/75 flex justify-between items-center">
                <button
                  onClick={() => toggleProjectExpansion(project.id)}
                  id={`project-expand-btn-${project.id}`}
                  className="text-xs font-bold font-mono text-[#00B5FF] hover:text-white flex items-center transition-colors focus:outline-none"
                >
                  <LucideIcon name="Briefcase" className="mr-1.5" size={13} />
                  <span>{isExpanded ? 'Hide Briefing Data' : 'Read Full Case Study'}</span>
                </button>

                <button
                  onClick={() => onBookClick(project.clientType)}
                  id={`project-action-btn-${project.id}`}
                  className="text-xs font-semibold text-slate-400 hover:text-brand-secondary flex items-center space-x-1 hover:underline transition-all"
                >
                  <span>Build Similar System</span>
                  <LucideIcon name="ArrowRight" size={12} />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
