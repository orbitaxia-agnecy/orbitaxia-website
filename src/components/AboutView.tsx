/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LucideIcon from './LucideIcon';
import { INDUSTRIES } from '../data';

interface AboutViewProps {
  onContactClick: () => void;
}

export default function AboutView({ onContactClick }: AboutViewProps) {
  
  const values = [
    {
      title: 'Precision Over Hype',
      icon: 'ShieldCheck',
      desc: 'We refuse to buy click-farms or display inflated vanity status cards. We calibrate high-intent buyer pathways with verified CRM tracking metrics.'
    },
    {
      title: 'Conversion Psychology First',
      icon: 'Target',
      desc: 'Beautiful websites are useless if they suffer from high bounce rates. Every header, callout, and spacing index we build is designed to trigger human confidence.'
    },
    {
      title: 'Direct Strategic Alignment',
      icon: 'Users',
      desc: 'No generic automated account handlers. You coordinate directly with our seasoned design leaders and certified media buyers who manage budget scopes with high transparency.'
    },
    {
      title: 'Cumilla Roots, Global Standards',
      icon: 'Sparkles',
      desc: 'Specialized local network expertise throughout Bangladesh combined with modern international frameworks (React, Tailwind, Meta Conversion APIs).'
    }
  ];

  return (
    <div className="bg-brand-darker py-6 space-y-20 font-sans" id="about-page-view">
      
      {/* Intro Hero Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center overflow-hidden">
        
        {/* Decorative elements */}
        <div className="glow-spot -top-10 left-1/2 -translate-x-1/2" />

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00B5FF] uppercase bg-brand-primary/10 px-3.5 py-1.5 rounded-full border border-brand-primary/15">
            About Orbitaxia
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Scaling Brands <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#0093D5] to-[#00B5FF] bg-clip-text text-transparent">
              Beyond Conventional Limits
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            Orbitaxia is a digital marketing and creative engineering agency based in Bangladesh. We bring together modern consumer psychology, elite advertising networks, and performant web technologies.
          </p>
        </div>
      </section>

      {/* Corporate Philosophy Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6" id="about-story-col">
            <span className="text-xs font-mono font-bold text-brand-secondary tracking-wider uppercase block">
              Our Blueprint
            </span>
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Why We Launched Orbitaxia
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              We observed that traditional marketing setups frequently sell general visibility without auditing actual business outcomes. For schools, doctors, real estate firms, and growing corporate groups, this means massive wasted monthly advertising spend.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm">
              Orbitaxia was established with a singular focus: **Conversion Engineering**. We design and build every ad copy, video hook, logo mark, and code file specifically to lower customer acquisition costs (CAC) and secure sales pipelines.
            </p>
            
            <div className="border-l-4 border-brand-primary pl-4 py-1 bg-brand-card/25 rounded-r-lg" id="about-quote-box">
              <p className="text-slate-300 text-xs italic leading-relaxed">
                "Our agency is optimized for high speed and strict measurement. If a tool doesn’t directly contribute to lead generation or user trust, we omit it from our stack."
              </p>
              <span className="text-[10px] font-mono font-semibold text-brand-secondary block mt-1">
                — Orbitaxia Core Team Directive
              </span>
            </div>
          </div>

          {/* Interactive Core Values display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" id="about-values-grid">
            {values.map((v, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-brand-card/30 border border-brand-border/40 hover:border-brand-secondary/35 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-[#00B5FF] flex items-center justify-center mb-4">
                  <LucideIcon name={v.icon} size={18} />
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Target Audiences Summary map */}
      <section className="bg-brand-card/15 py-16 border-y border-brand-border/40" id="industries-we-serve-deepdive">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold text-brand-secondary tracking-wider uppercase block">
              Concrete Focus
            </span>
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Tailoring Growth Systems For Core Sectors
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
              We specialize in five prominent business vectors in Bangladesh where customer acquisition depends heavily on building immediate digital authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="industries-detailed-list">
            {INDUSTRIES.map((ind) => (
              <div 
                key={ind.id}
                className="p-6 rounded-2xl bg-[#0F1729] border border-brand-border flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary flex items-center justify-center">
                      <LucideIcon name={ind.iconName} size={20} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {ind.name}
                    </h3>
                  </div>
                  
                  <p className="text-xs text-slate-350 leading-relaxed font-sans">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-brand-border/40">
                  <span className="text-[10px] font-mono tracking-wider font-bold text-[#00B5FF] uppercase block mb-2">
                    Action Plan Deployed:
                  </span>
                  <ul className="space-y-1.5">
                    {ind.growthTactics.map((tac, tIdx) => (
                      <li key={tIdx} className="flex items-start text-[11px] text-slate-300 font-sans">
                        <span className="text-brand-secondary mr-2">•</span>
                        <span>{tac}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Trust & Verification Credentials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-r from-brand-card to-brand-card/40 border border-brand-secondary/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/5 rounded-full filter blur-[60px] pointer-events-none" />

          <div className="space-y-3 max-w-xl relative z-10" id="about-cta-text">
            <span className="text-xs font-mono font-bold text-[#00B5FF] uppercase block">
              100% Honest Engagement Guarantee
            </span>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
              Ready to construct your modern campaign architectures with Orbitaxia?
            </h3>
            <p className="text-slate-350 text-xs leading-relaxed font-sans">
              No generic formulas, fake certifications, or unverified claims. We invite you to book a free 30-minute system diagnostic session where we audit your target keywords and review localized competitors.
            </p>
          </div>

          <div className="shrink-0 relative z-10" id="about-cta-button-container">
            <button
              onClick={onContactClick}
              id="about-cta-action"
              className="px-6 py-3 rounded-lg text-sm font-bold bg-white hover:bg-[#00B5FF] text-brand-dark font-display cursor-pointer hover:shadow-[0_0_15px_rgba(0,181,255,0.3)] transition-all duration-300 border border-white"
            >
              Book Strategic Audit
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
