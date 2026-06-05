/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import LucideIcon from './LucideIcon';

interface PrivacyCharterViewProps {
  onBackClick: () => void;
  onContactClick: () => void;
}

export default function PrivacyCharterView({ onBackClick, onContactClick }: PrivacyCharterViewProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left" id="privacy-charter-view">
      
      {/* Return Back Trigger Button */}
      <div>
        <button
          onClick={onBackClick}
          id="privacy-back-btn"
          className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#00B5FF] hover:text-white transition-colors group focus:outline-none"
        >
          <LucideIcon name="ArrowLeft" className="transform group-hover:-translate-x-1 transition-transform" size={14} />
          <span>Back to Homepage</span>
        </button>
      </div>

      {/* Header Block Title Area */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold tracking-widest text-[#00B5FF] bg-brand-primary/10 border border-brand-primary/15 px-3 py-1.5 rounded-full uppercase inline-block">
          Orbitaxia Security Trust
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
          Privacy & Data Security Charter
        </h1>
        <p className="text-slate-350 text-sm font-sans leading-relaxed">
          Last revised: June 5, 2026. At Orbitaxia, structural transparency and professional data stewardship govern our client collaborations. We draft this charter to detail how we process prospective leads and guarantee data security.
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-8 text-xs sm:text-sm font-sans leading-relaxed text-slate-300">
        
        {/* Core Area 1 */}
        <div className="p-6 rounded-2xl bg-brand-card/35 border border-brand-border/40 space-y-3">
          <div className="flex items-center space-x-2.5 text-white">
            <div className="w-8 h-8 rounded bg-brand-primary/10 border border-brand-primary/20 text-[#00B5FF] flex items-center justify-center shrink-0">
              <LucideIcon name="ShieldCheck" size={16} />
            </div>
            <h2 className="font-display font-bold text-base">1. Lead Collection & Purposeful Routing</h2>
          </div>
          <p className="pl-10 text-slate-400">
            We capture details when you transmit strategic consultation proposals (including Full Name, Business Email, Hotline Phone, Company Name, and target parameters). All parameters are processed strictly to establish strategic direct-response campaigns (such as Meta Ads layout, conversion pages, or AdWords funnel planning).
          </p>
        </div>

        {/* Core Area 2 */}
        <div className="p-6 rounded-2xl bg-brand-card/35 border border-brand-border/40 space-y-3">
          <div className="flex items-center space-x-2.5 text-white">
            <div className="w-8 h-8 rounded bg-brand-primary/10 border border-brand-primary/20 text-[#00B5FF] flex items-center justify-center shrink-0">
              <LucideIcon name="Database" size={16} />
            </div>
            <h2 className="font-display font-bold text-base">2. Localized Browser Sandbox Storage</h2>
          </div>
          <p className="pl-10 text-slate-400">
            To provide developers and client administrators high-transparency verification, submitted consultation applications are stored within your local web browser's Sandbox space (<code className="font-mono bg-[#050811] px-1 py-0.5 rounded text-[#00B5FF]">localStorage</code>). This guarantees you retain absolute domain control of test lead indices without remote middleware leakage risks.
          </p>
        </div>

        {/* Core Area 3 */}
        <div className="p-6 rounded-2xl bg-brand-card/35 border border-brand-border/40 space-y-3">
          <div className="flex items-center space-x-2.5 text-white">
            <div className="w-8 h-8 rounded bg-brand-primary/10 border border-brand-primary/20 text-[#00B5FF] flex items-center justify-center shrink-0">
              <LucideIcon name="Lock" size={16} />
            </div>
            <h2 className="font-display font-bold text-base">3. Conversion API & Integrations Security</h2>
          </div>
          <p className="pl-10 text-slate-400">
            During live campaign executions (such as hospital ad channels, academy catalogs, or real estate funnels), we configure structural conversion APIs (Meta CAPI, Google GTM Server-Side Container nodes) to guarantee user consent parameters are compiled safely according to regional compliance directives.
          </p>
        </div>

        {/* Core Area 4 */}
        <div className="p-6 rounded-2xl bg-brand-card/35 border border-brand-border/40 space-y-3">
          <div className="flex items-center space-x-2.5 text-white">
            <div className="w-8 h-8 rounded bg-brand-primary/10 border border-brand-primary/20 text-[#00B5FF] flex items-center justify-center shrink-0">
              <LucideIcon name="Layers" size={16} />
            </div>
            <h2 className="font-display font-bold text-base">4. Regional Compliance</h2>
          </div>
          <p className="pl-10 text-slate-400">
            For campaign operations in Bangladesh, we align tracking policies and SMS-opt-in forms to align with the Digital Security guidelines of Bangladesh. We refuse to rent, distribute, or broker physical contact spreadsheets to unverified third-party groups.
          </p>
        </div>

        {/* Core Area 5 */}
        <div className="p-6 rounded-2xl bg-brand-card/35 border border-brand-border/40 space-y-3">
          <div className="flex items-center space-x-2.5 text-white">
            <div className="w-8 h-8 rounded bg-brand-primary/10 border border-brand-primary/20 text-[#00B5FF] flex items-center justify-center shrink-0">
              <LucideIcon name="HelpCircle" size={16} />
            </div>
            <h2 className="font-display font-bold text-base">5. Access Rights & Deletion requests</h2>
          </div>
          <p className="pl-10 text-slate-400">
            At any stage, you may request absolute deletion of stored lead items. You can instantly purge information recorded in your local testing logs by utilizing the "Purge Local Storage Logs" trigger located in our developer diagnostic dashboard at the footer container.
          </p>
        </div>

      </div>

      {/* Strategic callout block */}
      <div className="p-8 rounded-2xl bg-gradient-to-tr from-[#0F1729] to-brand-card/90 border border-brand-secondary/30 text-center space-y-4">
        <h3 className="font-display font-bold text-lg text-white">
          Require More Direct Framework Specifics?
        </h3>
        <p className="text-slate-400 text-xs max-w-xl mx-auto">
          Contact our strategic digital security team to access standard nondisclosure agreement options (NDAs) tailored for diagnostic clinics, institutional boards, and property management systems.
        </p>
        <button
          onClick={onContactClick}
          id="privacy-contact-cta"
          className="px-5 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider bg-[#00B5FF] hover:bg-[#0093D5] text-brand-dark uppercase cursor-pointer hover:shadow-[0_0_15px_rgba(0,181,255,0.3)] transition-all"
        >
          Request NDA & Consultation
        </button>
      </div>

    </section>
  );
}
