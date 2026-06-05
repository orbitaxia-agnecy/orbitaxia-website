/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Service } from '../types';
import LucideIcon from './LucideIcon';

interface ServiceCardProps {
  key?: string;
  service: Service;
  isSelected: boolean;
  onSelect: () => void;
  onBookClick: (serviceName?: string) => void;
}

export default function ServiceCard({ service, isSelected, onSelect, onBookClick }: ServiceCardProps) {
  const [internalExpanded, setInternalExpanded] = useState(false);

  return (
    <div 
      className={`relative rounded-2xl transition-all duration-300 border bg-brand-card/75 backdrop-blur-md overflow-hidden ${
        isSelected || internalExpanded
          ? 'border-brand-secondary shadow-[0_0_30px_rgba(0,181,255,0.15)] ring-1 ring-brand-secondary/35' 
          : 'border-brand-border/80 hover:border-brand-secondary/40 hover:shadow-[0_10px_25px_rgba(0,147,213,0.06)]'
      }`}
      id={`service-card-${service.id}`}
    >
      {/* Accent gradient strip on top */}
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary to-brand-secondary" />

      <div className="p-6 md:p-8">
        {/* Top Header Node */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-primary/10 to-brand-secondary/20 flex items-center justify-center text-brand-secondary border border-brand-primary/20 shadow-[0_0_15px_rgba(0,181,255,0.1)]">
            <LucideIcon name={service.iconName} size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-white">
              {service.title}
            </h3>
            <span className="text-xs font-mono text-brand-secondary font-medium tracking-wide">
              Orbitaxia Elite Blueprint
            </span>
          </div>
        </div>

        {/* Short Summary Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
          {service.tagline}
        </p>

        {/* Deliverables quick list structure */}
        <div className="mb-6">
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-500 uppercase block mb-3">
            Core Phase Milestones:
          </span>
          <ul className="space-y-2">
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start text-xs text-slate-300 font-sans">
                <span className="text-brand-secondary mr-2.5 mt-0.5 shrink-0 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button selection layout */}
        <div className="flex items-center justify-between border-t border-brand-border/40 pt-5 mt-4">
          <button
            onClick={() => {
              setInternalExpanded(!internalExpanded);
              onSelect();
            }}
            id={`service-details-toggle-${service.id}`}
            className="text-xs font-bold font-mono text-[#00B5FF] hover:text-white flex items-center transition-colors focus:outline-none"
          >
            <span>{internalExpanded ? 'Collapse Blueprint' : 'Examine Playbook'}</span>
            <LucideIcon 
              name="ChevronDown" 
              className={`ml-1.5 transform transition-transform duration-300 ${internalExpanded ? 'rotate-180' : ''}`} 
              size={14} 
            />
          </button>

          <button
            onClick={() => onBookClick(service.title)}
            id={`service-book-cta-${service.id}`}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-brand-primary/10 hover:bg-brand-primary text-white hover:text-brand-dark border border-brand-primary/20 hover:border-transparent transition-all"
          >
            Deploy Setup
          </button>
        </div>

        {/* Detailed Dropdown Drawer Layer */}
        {internalExpanded && (
          <div 
            className="mt-6 pt-6 border-t border-brand-border/60 space-y-5 animate-in fade-in slide-in-from-top-1 duration-300"
            id={`service-expanded-blueprint-${service.id}`}
          >
            <div>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                Strategic Approach:
              </h4>
              <p className="text-xs text-slate-350 leading-relaxed font-sans">
                {service.detailedDescription}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                Operational Processes:
              </h4>
              <ul className="space-y-2">
                {service.process.map((step, stepIdx) => (
                  <li key={stepIdx} className="flex items-start text-xs text-slate-350">
                    <span className="w-5 h-5 rounded-full bg-[#0093D5]/10 text-brand-secondary flex items-center justify-center shrink-0 mr-3 text-[10px] font-mono border border-[#0093D5]/20 font-bold">
                      {stepIdx + 1}
                    </span>
                    <span className="font-sans">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                Anticipated Key Benefits:
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {service.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start text-xs text-slate-300">
                    <LucideIcon name="Check" className="text-emerald-500 mr-2 shrink-0 mt-0.5" size={14} />
                    <span className="font-sans">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
