/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import PortfolioGrid from './components/PortfolioGrid';
import WhatsAppButton from './components/WhatsAppButton';
import LucideIcon from './components/LucideIcon';
import AboutView from './components/AboutView';
import LeadTracker from './components/LeadTracker';
import PrivacyCharterView from './components/PrivacyCharterView';
import { SERVICES, INDUSTRIES, FAQS } from './data';
import { Lead } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('hospitals-diagnostic');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('meta-ads');
  
  // Interactive lead tracker integration
  const [refreshTracker, setRefreshTracker] = useState<number>(0);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [lastSubmittedLead, setLastSubmittedLead] = useState<Lead | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    businessType: 'Hospitals & Diagnostic Centers',
    interestedService: 'Meta Ads Management',
    message: ''
  });

  // FAQs active toggler list
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Auto scroll to top on nav changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleContactAction = (prefilledService?: string) => {
    if (prefilledService) {
      setFormData(prev => ({
        ...prev,
        interestedService: prefilledService
      }));
    }
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Form Submission Logic
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Please provide your name and email address so we can route your consultation proposal.');
      return;
    }

    const newLead: Lead = {
      id: 'lead-' + Date.now(),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone || 'N/A',
      companyName: formData.companyName || 'SME Business Context',
      businessType: formData.businessType,
      interestedService: formData.interestedService,
      message: formData.message,
      submittedAt: new Date().toISOString(),
      status: 'new'
    };

    // Storing leads in localStorage
    const existing = localStorage.getItem('orbitaxia_leads');
    let updatedList: Lead[] = [];
    if (existing) {
      try {
        updatedList = JSON.parse(existing);
      } catch (err) {
        console.error('Error reading leads parse list', err);
      }
    }
    
    // Put newest lead first
    updatedList.unshift(newLead);
    localStorage.setItem('orbitaxia_leads', JSON.stringify(updatedList));

    // Show modal, clear form, update tracking
    setLastSubmittedLead(newLead);
    setShowSuccessModal(true);
    setRefreshTracker(prev => prev + 1);
    
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      businessType: 'Hospitals & Diagnostic Centers',
      interestedService: 'Meta Ads Management',
      message: ''
    });
  };

  // Dummy lead generator for instantaneous user testing
  const handleGenerateTestLead = () => {
    const dummyNames = ['Gulshan Specialized Eye Hospital', 'Scholars Tuition Academy', 'Mirpur Elite Residences Corp', 'Anik Local Tech SMEs', 'Dhaka Logistics Hub'];
    const dummyOwners = ['Anisur Rahman', 'Nusrat Jahan', 'Kazi Shahed', 'Mustafizur Sakib', 'Tanjila Ahmed'];
    const dummyEmails = ['contact@dhakaeyeclinic.org', 'admissions@scholarshq.edu', 'sales@mirpurelite.com', 'admin@aniksme.com', 'quote@dhakalogistics.com'];
    const dummyPhones = ['+880 1711-404090', '+880 1912-303020', '+880 1675-998877', '+880 1822-114455', '+880 1511-909080'];
    const dummyServices = ['Meta Ads Management', 'Google Ads Management', 'Website Design & Development', 'SEO & Lead Generation', 'Branding & Creative Design'];
    const dummySectors = ['Hospitals & Diagnostic Centers', 'Educational Institutions', 'Real Estate Companies', 'SMEs', 'Corporate Businesses'];
    const dummyMessages = [
      'We are looking to secure 50+ new specialized doctor bookings next month. Please share your diagnostic funnel strategy framework.',
      'Seek options to drive prospective registration inquires for our new localized engineering programs next season.',
      'We need high-income buyers targeted specifically in premium segments around Banani & Gulshan apartment campaigns.',
      'Need to build our digital Shopify catalog storefront with optimized checkout conversion layouts.',
      'We want to rank top 3 in Google Search for trade logistics and global cargo forwarding terms.'
    ];

    const idx = Math.floor(Math.random() * dummyNames.length);

    const dummyLead: Lead = {
      id: 'lead-test-' + Date.now(),
      fullName: dummyOwners[idx],
      email: dummyEmails[idx],
      phone: dummyPhones[idx],
      companyName: dummyNames[idx],
      businessType: dummySectors[idx],
      interestedService: dummyServices[idx],
      message: dummyMessages[idx],
      submittedAt: new Date().toISOString(),
      status: 'new'
    };

    const existing = localStorage.getItem('orbitaxia_leads');
    let list: Lead[] = [];
    if (existing) {
      try { list = JSON.parse(existing); } catch (e) {}
    }
    list.unshift(dummyLead);
    localStorage.setItem('orbitaxia_leads', JSON.stringify(list));
    setRefreshTracker(prev => prev + 1);
  };

  // Selected Industry logic handler
  const currentSelectedIndustry = INDUSTRIES.find(ind => ind.id === selectedIndustryId) || INDUSTRIES[0];

  return (
    <div className="min-h-screen bg-brand-darker text-brand-light flex flex-col justify-between selection:bg-brand-primary selection:text-brand-dark font-sans" id="app-wrapper">
      
      {/* Header Container Area */}
      <Header 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onContactClick={() => handleContactAction()}
      />

      {/* Main Core Body Views Router */}
      <main className="flex-grow">
        
        {/* VIEW 1: HOME */}
        {currentPage === 'home' && (
          <div id="home-view" className="space-y-24 pb-20">
            
            {/* HERO MODULE */}
            <section className="relative pt-12 md:pt-24 pb-16 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="hero-section">
              {/* Radial gradient backing spots */}
              <div className="glow-spot -top-20 -left-10" />
              <div className="glow-spot top-1/2 -right-10" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                
                {/* Left Text Col */}
                <div className="lg:col-span-7 space-y-6 text-left" id="hero-hero-text">
                  
                  {/* Dynamic Launch Badge */}
                  <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-3 py-1.5" id="hero-badge">
                    <span className="flex h-2 w-2 rounded-full bg-[#00B5FF] animate-pulse" />
                    <span className="text-[11px] font-mono font-bold tracking-wider text-brand-secondary uppercase">
                      Orbitaxia Creative Launch • Based in Bangladesh
                    </span>
                  </div>

                  {/* Core display heading matching user requested Headline */}
                  <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                    Helping Businesses <br className="hidden sm:block" />
                    Grow Through <br />
                    <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-white bg-clip-text text-transparent shadow-sm">
                      Marketing, Design & Tech
                    </span>
                  </h1>

                  {/* Tagline Subheadline match */}
                  <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-sans">
                    We help brands attract more customers, generate quality leads, and build a stronger digital presence. Specialize in Meta Ads, Google search intent, speed-optimized web platforms, and unified visual branding.
                  </p>

                  {/* Trust list items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400 py-2 font-mono">
                    <div className="flex items-center space-x-2.5">
                      <LucideIcon name="CheckCircle2" className="text-brand-secondary shrink-0" size={16} />
                      <span>Realistic Direct Results (No Fake Stats)</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <LucideIcon name="CheckCircle2" className="text-brand-secondary shrink-0" size={16} />
                      <span>Certified Google & Meta Buyers</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <LucideIcon name="CheckCircle2" className="text-brand-secondary shrink-0" size={16} />
                      <span>Speed Rated React & Tailwind Dev</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <LucideIcon name="CheckCircle2" className="text-brand-secondary shrink-0" size={16} />
                      <span>No Locks On Contract Renewals</span>
                    </div>
                  </div>

                  {/* Navigation click triggers */}
                  <div className="flex flex-wrap items-center gap-4 pt-3" id="hero-actions-bar">
                    <button
                      onClick={() => handleContactAction()}
                      id="hero-cta-primary"
                      className="px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-dark hover:shadow-[0_0_25px_rgba(0,181,255,0.4)] cursor-pointer hover:scale-103 active:scale-97 transition-all duration-300 font-display"
                    >
                      Book Free Consultation
                    </button>
                    
                    <button
                      onClick={() => handlePageChange('services')}
                      id="hero-cta-secondary"
                      className="px-6 py-3.5 rounded-lg text-sm font-bold hover:bg-slate-800/40 text-white border border-brand-border hover:border-brand-secondary cursor-pointer hover:scale-103 active:scale-97 transition-all duration-300 font-display"
                    >
                      View Services
                    </button>
                  </div>

                </div>

                {/* Right Interactive Mockup Dashboard Col */}
                <div className="lg:col-span-5 relative" id="hero-right-dashboard-preview">
                  
                  {/* Structural decorative absolute nodes in backing */}
                  <div className="absolute inset-0 bg-brand-primary/5 rounded-3xl filter blur-3xl -z-10" />

                  <div className="glass-panel border border-brand-border/80 rounded-2xl p-6 shadow-2xl relative">
                    
                    {/* Mock Browser Title bar */}
                    <div className="flex items-center justify-between border-b border-brand-border/40 pb-4 mb-5">
                      <div className="flex space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[9px] font-mono text-slate-500">orbitaxia_control_node.ts</span>
                      <span className="w-4 h-4 text-brand-secondary flex items-center justify-center">
                        <LucideIcon name="Sparkles" size={12} />
                      </span>
                    </div>

                    {/* Operational Telemetry Card overview */}
                    <div className="space-y-4">
                      
                      {/* Active KPI counters */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#050811] p-3 rounded-xl border border-brand-border/50">
                          <span className="text-[10px] uppercase font-mono text-slate-500 block">Total Inquiries Saved</span>
                          <span className="text-xl font-bold font-display text-white block mt-1">Real-Time</span>
                          <span className="text-[9px] font-mono font-semibold text-brand-secondary block mt-0.5">Capturing leads locally</span>
                        </div>
                        <div className="bg-[#050811] p-3 rounded-xl border border-brand-border/50">
                          <span className="text-[10px] uppercase font-mono text-slate-500 block">Campaign Status</span>
                          <span className="text-xl font-bold font-display text-emerald-400 block mt-1">● ACTIVE</span>
                          <span className="text-[9px] font-mono text-slate-400 block mt-0.5">Continuous optimization</span>
                        </div>
                      </div>

                      {/* Display live pipeline preview snippet */}
                      <div className="space-y-2.5 bg-[#080E1B] p-3.5 rounded-xl border border-brand-border/40">
                        <div className="flex justify-between text-[10px] text-slate-400 font-mono font-bold">
                          <span>CHANNEL SOURCE</span>
                          <span>PERFORMANCE STATUS</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-300 font-medium">1. Meta Direct Messenger Ads</span>
                            <span className="text-[#00B5FF] font-mono font-bold">Inbound Callout Open</span>
                          </div>
                          {/* Animated progress bar layout */}
                          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-[#0093D5] h-full rounded-full w-[82%]" />
                          </div>

                          <div className="flex justify-between items-center text-xs pt-1">
                            <span className="text-slate-300 font-medium">2. High-Intent Google Search</span>
                            <span className="text-[#00B5FF] font-mono font-bold">ROAS Focus Optimized</span>
                          </div>
                          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-brand-secondary h-full rounded-full w-[74%]" />
                          </div>
                        </div>
                      </div>

                      {/* Diagnostic trigger prompt */}
                      <div className="p-3 bg-brand-primary/10 rounded-lg border border-brand-primary/20 text-center">
                        <span className="text-slate-300 text-[11px] block">
                          "We replace legacy visual bloat with fast-loading high-utility UI elements."
                        </span>
                        <button
                          onClick={() => handleContactAction()}
                          id="mockup-action-link"
                          className="text-[10px] font-mono text-brand-secondary font-bold hover:underline mt-1.5 block mx-auto focus:outline-none"
                        >
                          Request Your Blueprint Strategy Draft &rarr;
                        </button>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </section>

            {/* SERVICES OVERVIEW SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="services-overview-section">
              
              {/* Header block intro */}
              <div className="text-center space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#00B5FF] uppercase bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/15">
                  Bespoke Action Blueprints
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                  Services Tailored To Attract Conversions
                </h2>
                <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
                  We specialize in crafting precision marketing programs that capture genuine buyer intention. We hand-code our web platforms to ensure lightning-fast responsiveness.
                </p>
              </div>

              {/* Grid showing first 3 services only */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-overview-grid">
                {SERVICES.slice(0, 3).map((serv) => (
                  <ServiceCard 
                    key={serv.id}
                    service={serv}
                    isSelected={selectedServiceId === serv.id}
                    onSelect={() => setSelectedServiceId(serv.id)}
                    onBookClick={handleContactAction}
                  />
                ))}
              </div>

              {/* View all button transitioning to services tab */}
              <div className="text-center pt-4" id="services-viewall-container">
                <button
                  onClick={() => handlePageChange('services')}
                  id="cta-explore-services-home"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-[#00B5FF] hover:text-white transition-colors group focus:outline-none"
                >
                  <span>Explore Complete Roster of 6 Advertising & Design Services</span>
                  <LucideIcon name="ArrowRight" className="transform group-hover:translate-x-1.5 transition-transform" size={16} />
                </button>
              </div>

            </section>

            {/* INDUSTRIES WE SERVE SELECTIVE INTERACTIVE PANEL */}
            <section className="bg-brand-card/20 py-20 border-y border-brand-border/40" id="industries-serve-section">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                
                {/* Titles */}
                <div className="text-center space-y-3">
                  <span className="text-xs font-mono font-bold tracking-wider text-brand-secondary uppercase block">
                    Tailored Sector Frameworks
                  </span>
                  <h2 className="font-display font-bold text-3xl text-white tracking-tight">
                    Custom Funnels Built For High-Conversion Sectors
                  </h2>
                  <p className="text-slate-450 text-sm max-w-lg mx-auto font-sans">
                    Generic campaigns fail because user intent differs across industries. Click your vertical to review how we structure our targeted acquisition protocols in Bangladesh.
                  </p>
                </div>

                {/* Selective segments Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="industries-interactive-block">
                  
                  {/* Left selectors */}
                  <div className="lg:col-span-5 flex flex-col space-y-2.5" id="industry-selector-buttons">
                    {INDUSTRIES.map((ind) => (
                      <button
                        key={ind.id}
                        id={`ind-tab-btn-${ind.id}`}
                        onClick={() => setSelectedIndustryId(ind.id)}
                        className={`p-4 text-left rounded-xl transition-all border flex items-center space-x-4 cursor-pointer ${
                          selectedIndustryId === ind.id
                            ? 'bg-brand-primary/15 border-brand-secondary/80 text-white shadow-lg'
                            : 'bg-brand-card/20 border-brand-border/40 text-slate-400 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                          selectedIndustryId === ind.id 
                            ? 'bg-brand-primary text-brand-dark border-transparent' 
                            : 'bg-slate-900 text-slate-400 border-brand-border'
                        }`}>
                          <LucideIcon name={ind.iconName} size={18} />
                        </div>
                        
                        <div className="truncate max-w-[240px]">
                          <span className="text-xs font-mono block text-slate-500">VERTICAL MODULE</span>
                          <span className="font-display font-extrabold text-sm block mt-0.5">{ind.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Right description box */}
                  <div className="lg:col-span-7 bg-brand-card/45 border border-brand-border p-6 md:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden" id="industry-display-card">
                    <div className="absolute top-0 right-0 w-60 h-60 bg-brand-primary/5 rounded-full filter blur-3xl" />
                    
                    <div className="space-y-6 relative z-10">
                      
                      {/* Section label */}
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary flex items-center justify-center">
                          <LucideIcon name={currentSelectedIndustry.iconName} size={22} />
                        </div>
                        <div>
                          <h3 className="font-display font-medium text-xl text-white">
                            {currentSelectedIndustry.name} Blueprint
                          </h3>
                          <span className="text-[10px] font-mono text-brand-secondary tracking-widest uppercase block">
                            Orbitaxia Conversion Strategy
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-200 leading-relaxed font-sans pt-1">
                        {currentSelectedIndustry.description}
                      </p>

                      {/* Interactive lists steps */}
                      <div className="space-y-3 pt-3">
                        <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase block">
                          Tactic Highlights Built For This Sector:
                        </span>
                        
                        <ul className="space-y-2.5">
                          {currentSelectedIndustry.growthTactics.map((tac, idx) => (
                            <li key={idx} className="flex items-start text-xs text-slate-300 font-sans">
                              <span className="text-brand-secondary mr-3 font-mono font-bold">0{idx + 1}.</span>
                              <span>{tac}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    <div className="mt-8 pt-6 border-t border-brand-border/40 flex flex-wrap items-center justify-between gap-4 relative z-10" id="industry-card-footer">
                      <span className="text-[11px] font-mono text-slate-500">
                        *Realistic localized implementations matching standard regulatory guidelines.
                      </span>

                      <button
                        onClick={() => handleContactAction(SERVICES.find(s => s.id === 'meta-ads')?.title)}
                        id="industry-cta-trigger"
                        className="px-4 py-2 text-xs font-bold font-mono text-brand-secondary hover:text-white flex items-center space-x-1 border border-brand-secondary/30 rounded bg-slate-900/50 hover:border-brand-secondary transition"
                      >
                        <span>Deploy This Model</span>
                        <LucideIcon name="ArrowRight" size={12} />
                      </button>
                    </div>

                  </div>

                </div>

              </div>
            </section>

            {/* WHY CHOOSE ORBITAXIA MODULE */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="why-choose-orbitaxia-section">
              
              <div className="text-center space-y-3">
                <span className="text-xs font-mono font-bold text-brand-secondary tracking-wider uppercase block">
                  Absolute Transparency
                </span>
                <h2 className="font-display font-bold text-3xl text-white tracking-tight">
                  Our Values Safeguarding Your Marketing Spend
                </h2>
                <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
                  We hate low-quality vanity metrics as much as you do. We build real conversion engines governed by honest reporting.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-choose-values-grid">
                
                {/* Card 1 */}
                <div className="p-6 rounded-2xl bg-brand-card/35 border border-brand-border/50 hover:border-brand-secondary/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <LucideIcon name="ShieldCheck" size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    Guaranteed Realistic Copy & Metrics
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    We refuse to display imaginary awards or fabricate client praise notes. We win contracts based on sheer logical analysis and systematic A/B ad creative testing processes.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 rounded-2xl bg-brand-card/35 border border-brand-border/50 hover:border-brand-secondary/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-[#0093D5]/20 text-[#0093D5] flex items-center justify-center mb-4">
                    <LucideIcon name="Target" size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    Advanced Intent Lead Funneling
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    We steer your marketing budget strictly towards transaction-ready demographics, utilizing direct negative keyword matching on search ads and multi-field qualifiers on ads forms.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 rounded-2xl bg-brand-card/35 border border-brand-border/50 hover:border-brand-secondary/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary flex items-center justify-center mb-4">
                    <LucideIcon name="Users" size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    Direct Team Access, No Middleware
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Bypass complex corporate management delays. You map campaign directives directly with our seasoned design engineers and media managers over convenient channels.
                  </p>
                </div>

              </div>

            </section>

            {/* PORTFOLIO PREVIEW */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="portfolio-preview-section">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-2 text-left">
                  <span className="text-xs font-mono font-bold text-brand-secondary tracking-wider uppercase block">
                    Proven Deployments
                  </span>
                  <h2 className="font-display font-bold text-3xl text-white tracking-tight">
                    Success Blueprints We Have Managed
                  </h2>
                  <p className="text-slate-400 text-xs max-w-lg font-sans">
                    Review how we structure campaigns to minimize cost-per-lead (CPL) and scale confirmed transactions in Bangladesh.
                  </p>
                </div>

                <div className="shrink-0" id="portfolio-header-cta">
                  <button
                    onClick={() => handlePageChange('portfolio')}
                    id="cta-explore-portfolio-home"
                    className="p-3 text-xs font-mono font-bold rounded-lg border border-brand-border hover:border-brand-secondary text-slate-300 hover:text-white transition cursor-pointer"
                  >
                    Examine All Case Files &rarr;
                  </button>
                </div>
              </div>

              {/* Renders first 2 projects only for landing preview */}
              <PortfolioGrid limit={2} onBookClick={handleContactAction} />

            </section>

            {/* CALL TO ACTION MODULE */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="cta-card-section">
              <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-tr from-[#0F1729] to-brand-card/90 border border-brand-secondary/35 text-center relative overflow-hidden space-y-6">
                
                {/* Ambient glow backing */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-brand-secondary/10 rounded-full filter blur-[60px]" />

                <div className="max-w-2xl mx-auto space-y-4 relative z-10" id="cta-card-text">
                  <span className="text-xs font-mono font-bold text-brand-secondary uppercase tracking-widest block bg-brand-primary/10 w-fit mx-auto px-3 py-1 rounded border border-brand-primary/10">
                    Scaling Brands Beyond Limits
                  </span>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                    Secure Your 30-Minute Competitive Analysis Session — 100% Free
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-sans">
                    We will audit your prominent local search competitors, test your mobile landing speed performance, and present 3 specific creative campaign ad ideas. No string alignments attached.
                  </p>
                </div>

                <div className="relative z-10" id="cta-card-action">
                  <button
                    onClick={() => handleContactAction()}
                    id="cta-book-consult-middle"
                    className="px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide bg-[#00B5FF] hover:bg-[#0093D5] text-brand-dark font-display cursor-pointer hover:shadow-[0_0_20px_rgba(0,181,255,0.4)] transition-all"
                  >
                    Book Free Consultation Slot
                  </button>
                </div>

              </div>
            </section>

            {/* FAQ HARNESS ACCORDION */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="faq-section">
              
              <div className="text-center space-y-3">
                <span className="text-xs font-mono font-bold text-brand-secondary tracking-wider uppercase block">
                  Got Questions? We Have Answers
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  Queries Frequently Raised by Clients
                </h2>
              </div>

              <div className="divide-y divide-brand-border/60 border-y border-brand-border/60" id="faq-interactive-list">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="py-4 text-left" id={`faq-item-${idx}`}>
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        id={`faq-btn-${idx}`}
                        className="w-full flex justify-between items-center text-sm font-bold font-display text-white hover:text-brand-secondary py-2 focus:outline-none text-left"
                      >
                        <span>{faq.question}</span>
                        <LucideIcon 
                          name="ChevronDown" 
                          className={`ml-2 text-[#00B5FF] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                          size={16} 
                        />
                      </button>

                      {isOpen && (
                        <p className="text-xs text-slate-300 leading-relaxed font-sans pt-2 pb-3 pl-1 animate-in fade-in duration-200" id={`faq-ans-${idx}`}>
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

            </section>

            {/* PERSISTENT CONTACT FORM AT THE BOTTOM */}
            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="bottom-contact-form-section">
              
              <div className="text-center space-y-3">
                <span className="text-xs font-mono font-semibold tracking-wider text-brand-secondary uppercase block">
                  Start Your Growth Sequence
                </span>
                <h2 className="font-display font-extrabold text-3xl text-white tracking-tight">
                  Book A Consult Appointment
                </h2>
                <p className="text-slate-400 text-xs font-sans max-w-sm mx-auto">
                  Provide your initial corporate parameters below and our strategic team lines will response within 1 business day.
                </p>
              </div>

              <div className="glass-panel border-2 border-brand-border rounded-3xl p-6 sm:p-10 shadow-2xl relative" id="home-contact-form-card">
                
                <form onSubmit={handleFormSubmit} className="space-y-5" id="home-direct-contact-form">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        id="form-full-name"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="w-full bg-[#0E1525]/85 border border-brand-border/80 focus:border-brand-secondary rounded-lg px-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:ring-1 focus:ring-brand-secondary/35 focus:outline-none"
                        placeholder="e.g. Shakib Al Hasan"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase block">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        id="form-email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-[#0E1525]/85 border border-brand-border/80 focus:border-brand-secondary rounded-lg px-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:ring-1 focus:ring-brand-secondary/35 focus:outline-none"
                        placeholder="e.g. director@hospital.com"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Phone */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase block">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-[#0E1525]/85 border border-brand-border/80 focus:border-brand-secondary rounded-lg px-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:ring-1 focus:ring-brand-secondary/35 focus:outline-none"
                        placeholder="e.g. +880 1805-XXXXXX"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase block">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="form-company"
                        value={formData.companyName}
                        onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                        className="w-full bg-[#0E1525]/85 border border-brand-border/80 focus:border-brand-secondary rounded-lg px-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:ring-1 focus:ring-brand-secondary/35 focus:outline-none"
                        placeholder="e.g. Apex Diagnostics Ltd."
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Select Sector matching user Target clients */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase block">
                        Business Domain
                      </label>
                      <select
                        id="form-sector"
                        value={formData.businessType}
                        onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                        className="w-full bg-[#0E1525] border border-brand-border focus:border-brand-secondary rounded-lg px-4 py-3 text-xs text-slate-350 focus:outline-none"
                      >
                        <option>Hospitals & Diagnostic Centers</option>
                        <option>Real Estate Companies</option>
                        <option>Educational Institutions</option>
                        <option>SMEs</option>
                        <option>Corporate Businesses</option>
                        <option>Other Business Segment</option>
                      </select>
                    </div>

                    {/* Service Type matched */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase block">
                        Interested Agency Module
                      </label>
                      <select
                        id="form-service-type"
                        value={formData.interestedService}
                        onChange={(e) => setFormData(prev => ({ ...prev, interestedService: e.target.value }))}
                        className="w-full bg-[#0E1525] border border-brand-border focus:border-brand-secondary rounded-lg px-4 py-3 text-xs text-slate-350 focus:outline-none"
                      >
                        {SERVICES.map(s => (
                          <option key={s.id}>{s.title}</option>
                        ))}
                        <option>Full-Scale Omni Channel (All Services)</option>
                      </select>
                    </div>

                  </div>

                  {/* Message body text */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase block">
                      Explain Your Targets & Scope (Optional)
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-[#0E1525]/85 border border-brand-border/80 focus:border-brand-secondary rounded-lg px-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-secondary/35 focus:outline-none resize-none"
                      placeholder="Share elements of your campaign targets, monthly budgets, or specific diagnostic requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-consultation-form-btn"
                    className="w-full py-4 rounded-xl text-xs font-bold tracking-widest bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-dark uppercase font-display cursor-pointer hover:shadow-[0_0_20px_rgba(0,181,255,0.45)] transition-all scale-100 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Transmit Setup Verification Proposal
                  </button>

                </form>

              </div>
            </section>

          </div>
        )}

        {/* VIEW 2: SERVICES */}
        {currentPage === 'services' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="services-page-view">
            
            {/* Header intro info */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00B5FF] bg-brand-primary/10 border border-brand-primary/15 px-3 py-1.5 rounded-full uppercase">
                Orbitaxia Service Blueprints
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                Our Core Services & Campaigns
              </h1>
              <p className="text-slate-300 text-sm font-sans">
                We design specific direct-response pipelines suited for physical clinic groups, academic enrollment campaign nodes, multi-unit apartment agencies, corporate platforms, and SMEs looking to scale.
              </p>
            </div>

            {/* Six core services cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-page-grid">
              {SERVICES.map((s) => (
                <ServiceCard 
                  key={s.id}
                  service={s}
                  isSelected={selectedServiceId === s.id}
                  onSelect={() => setSelectedServiceId(s.id)}
                  onBookClick={handleContactAction}
                />
              ))}
            </div>

            {/* Value cards lower list block */}
            <div className="bg-brand-card/25 border border-brand-border p-8 rounded-2xl max-w-4xl mx-auto space-y-6" id="services-execution-audit">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                  <LucideIcon name="ShieldCheck" size={18} />
                </div>
                <h3 className="font-display font-bold text-xl text-white">How We Secure Low CPM Acquisition Outputs</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 font-sans leading-relaxed text-left">
                <div className="space-y-1.5">
                  <span className="font-bold text-white block">1. Meta Direct Messenger Routing APIs:</span>
                  <span>We bypass slow standard email templates. We route social traffic to localized automated WhatsApp or Messenger channels to instant capture phone indices instantly.</span>
                </div>
                <div className="space-y-1.5">
                  <span className="font-bold text-white block">2. High-Intent AdWords Mining:</span>
                  <span>We block money wasting queries such as "free", "salary", "jobs" on Google, targeting budget strictly to direct buyer intentions immediately.</span>
                </div>
                <div className="space-y-1.5">
                  <span className="font-bold text-white block">3. Responsive Component Speed Focus:</span>
                  <span>Our hand-coded React designs consume low network bandwidth, keeping prospective clients locked to your offer interface.</span>
                </div>
                <div className="space-y-1.5">
                  <span className="font-bold text-white block">4. Direct A/B Creative Asset Testing:</span>
                  <span>We produce up to 15 creative hooks in our video lab monthly, stopping budget allocation to weak designs in real-time.</span>
                </div>
              </div>
            </div>

          </section>
        )}

        {/* VIEW 3: ABOUT */}
        {currentPage === 'about' && (
          <AboutView onContactClick={() => handleContactAction()} />
        )}

        {/* VIEW 4: PORTFOLIO */}
        {currentPage === 'portfolio' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="portfolio-page-view">
            
            {/* Lead Title header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00B5FF] bg-brand-primary/10 border border-brand-primary/15 px-3 py-1.5 rounded-full uppercase">
                Orbitaxia Operation Files
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                Case Studies & Campaign Success Files
              </h1>
              <p className="text-slate-300 text-sm font-sans">
                Explore real, detailed campaign blueprints managed by our certified design engineers. No fake assets or client claim cards.
              </p>
            </div>

            {/* Component Grid */}
            <PortfolioGrid onBookClick={handleContactAction} />

          </section>
        )}

        {/* VIEW 6: PRIVACY CHARTER */}
        {currentPage === 'privacy' && (
          <PrivacyCharterView 
            onBackClick={() => handlePageChange('home')} 
            onContactClick={() => handleContactAction()} 
          />
        )}

        {/* VIEW 5: CONTACT */}
        {currentPage === 'contact' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="contact-page-view">
            
            {/* Header intro */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-secondary bg-brand-primary/10 px-3 py-1.5 border border-brand-primary/15 rounded-full uppercase">
                Strategic Alliance Desk
              </span>
              <h1 className="font-display font-bold text-4xl text-white tracking-tight">
                Get In Touch With Orbitaxia
              </h1>
              <p className="text-slate-350 text-sm font-sans">
                Book a free 30-minute competitor and keyword marketing diagnostic session today.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto" id="contact-panel-harness">
              
              {/* Left Column Quick details */}
              <div className="lg:col-span-4 bg-brand-card/30 border border-brand-border rounded-2xl p-6 space-y-6 text-left" id="contact-left-details">
                <h3 className="font-display font-bold text-white text-lg border-b border-brand-border/40 pb-3">
                  HQ Communication Info
                </h3>

                <div className="space-y-4 text-xs font-sans">
                  
                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded bg-brand-primary/10 border border-brand-primary/20 text-[#00B5FF] flex items-center justify-center shrink-0">
                      <LucideIcon name="MapPin" size={15} />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-100 block">Office Address:</span>
                      <p className="text-slate-400 mt-0.5 leading-relaxed">
                        524/Chandpur, Ahmed Nagar,<br />
                        Sadar Dakshine, Cumilla-3500,<br />
                        Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded bg-brand-primary/10 border border-brand-primary/20 text-[#00B5FF] flex items-center justify-center shrink-0">
                      <LucideIcon name="Mail" size={15} />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-100 block">Business Email:</span>
                      <a href="mailto:orbitaxia@gamil.com" className="text-brand-secondary hover:underline break-all mt-0.5 block font-mono">
                        orbitaxia@gamil.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded bg-brand-primary/10 border border-brand-primary/20 text-[#00B5FF] flex items-center justify-center shrink-0">
                      <LucideIcon name="Phone" size={15} />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-100 block">Hotline Phone:</span>
                      <a href="tel:+8801805971691" className="text-slate-300 hover:text-white transition mt-0.5 block font-mono">
                        +880 1805 971691
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded bg-[#10B981]/15 border border-[#10B981]/25 text-emerald-400 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-100 block">WhatsApp Desk:</span>
                      <a href="https://wa.me/8801805971691" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline mt-0.5 block font-mono">
                        +880 1805 971691
                      </a>
                    </div>
                  </div>

                </div>

                <div className="border-t border-brand-border/40 pt-4" id="contact-office-hours">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Standard Office Hours:</span>
                  <span className="text-slate-300 text-[11px] font-mono block">Sat — Thu: 10:00 AM - 07:00 PM (GMT +6)</span>
                </div>

              </div>

              {/* Right Column Glass Form */}
              <div className="lg:col-span-8 bg-brand-card/45 border border-brand-border p-6 sm:p-8 rounded-2xl shadow-xl" id="contact-right-form">
                <form onSubmit={handleFormSubmit} className="space-y-4" id="contact-detailed-form-element">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.fullName}
                        onChange={(e) => setFormData(p => ({...p, fullName: e.target.value}))}
                        className="w-full bg-[#0E1525] border border-brand-border/80 focus:border-brand-secondary rounded-lg px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-secondary/35"
                        placeholder="Shakib Al Hasan"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Business Email *</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData(p => ({...p, email: e.target.value}))}
                        className="w-full bg-[#0E1525] border border-brand-border/80 focus:border-brand-secondary rounded-lg px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-secondary/35"
                        placeholder="director@hospital.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Contact Phone</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData(p => ({...p, phone: e.target.value}))}
                        className="w-full bg-[#0E1525] border border-brand-border/80 focus:border-brand-secondary rounded-lg px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none"
                        placeholder="+880 1805-XXXXXX"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Company Name</label>
                      <input 
                        type="text" 
                        value={formData.companyName}
                        onChange={(e) => setFormData(p => ({...p, companyName: e.target.value}))}
                        className="w-full bg-[#0E1525] border border-brand-border/80 focus:border-brand-secondary rounded-lg px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none"
                        placeholder="Apex Diagnostics Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Sector Focus</label>
                      <select 
                        value={formData.businessType}
                        onChange={(e) => setFormData(p => ({...p, businessType: e.target.value}))}
                        className="w-full bg-[#0E1525] border border-brand-border focus:border-brand-secondary rounded-lg px-3 py-2.5 text-xs text-slate-300 focus:outline-none"
                      >
                        <option>Hospitals & Diagnostic Centers</option>
                        <option>Real Estate Companies</option>
                        <option>Educational Institutions</option>
                        <option>SMEs</option>
                        <option>Corporate Businesses</option>
                      </select>
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Bespoke Strategy Module</label>
                      <select 
                        value={formData.interestedService}
                        onChange={(e) => setFormData(p => ({...p, interestedService: e.target.value}))}
                        className="w-full bg-[#0E1525] border border-brand-border focus:border-brand-secondary rounded-lg px-3 py-2.5 text-xs text-slate-300 focus:outline-none"
                      >
                        {SERVICES.map(s => (
                          <option key={s.id}>{s.title}</option>
                        ))}
                        <option>Full-Scale Omni Channel (All Services)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Target Scope & Message</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({...p, message: e.target.value}))}
                      className="w-full bg-[#0E1525] border border-brand-border/80 focus:border-brand-secondary rounded-lg px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none resize-none"
                      placeholder="Share information regarding your monthly targets or specific systems requirements..."
                    />
                  </div>

                  <button 
                    type="submit"
                    id="detailed-contact-submit-btn"
                    className="w-full py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-dark uppercase tracking-widest font-display cursor-pointer hover:shadow-[0_0_20px_rgba(0,181,255,0.4)] transition"
                  >
                    Submit Strategical Blueprint Request
                  </button>

                </form>
              </div>

            </div>

          </section>
        )}

        {/* DEVELOPER WORKSPACE DIAGNOSTIC SECTION (LEADS STORAGE WORKFLOWS) */}
        <section className="bg-brand-darker py-6 border-t border-brand-border/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16" id="diagnostic-dashboard-block">
          <LeadTracker 
            onAddDummyLead={handleGenerateTestLead}
            refreshTrigger={refreshTracker}
          />
        </section>

      </main>

      {/* Floating WhatsApp Action node */}
      <WhatsAppButton />

      {/* FOOTER DIVISION */}
      <Footer 
        onPageChange={handlePageChange}
        onContactClick={() => handleContactAction()}
      />

      {/* SUCCESS POPUP DIALOG WINDOW */}
      {showSuccessModal && lastSubmittedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-darker/80 backdrop-blur-md animate-in fade-in" id="success-lead-modal-container">
          <div className="bg-brand-card border-2 border-brand-secondary rounded-2xl p-6 sm:p-8 max-w-lg w-full relative space-y-6 shadow-[0_0_50px_rgba(0,181,255,0.25)] animate-in zoom-in-95 duration-150">
            
            {/* Top Close */}
            <button 
              onClick={() => setShowSuccessModal(false)}
              id="success-modal-close-btn"
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer focus:outline-none"
              aria-label="Close dialog window"
            >
              <LucideIcon name="X" size={18} />
            </button>

            {/* Icon decoration */}
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-505/20 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <LucideIcon name="CheckCircle2" size={32} />
            </div>

            {/* Success title */}
            <div className="text-center space-y-2">
              <h3 className="font-display font-extrabold text-2xl text-white">
                Consultation Request Captured!
              </h3>
              <p className="text-xs text-slate-300 font-sans">
                Thank you **{lastSubmittedLead.fullName}**, your strategy request has been submitted securely directly to our Gulshan creative office planners.
              </p>
            </div>

            {/* Custom summary steps box design */}
            <div className="bg-[#0A101C] border border-brand-border/60 rounded-xl p-4 text-left space-y-3.5">
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-brand-secondary block mb-1">
                Planned Operational Coordinates:
              </span>
              
              <ul className="space-y-2.5 text-xs text-slate-350">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2.5 font-bold">1.</span>
                  <span>**Domain Audit Initiated**: We examine search rankings for **{lastSubmittedLead.companyName}** immediately.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2.5 font-bold">2.</span>
                  <span>**Strategy Outline Drafted**: Specialized ad structures set up for **{lastSubmittedLead.interestedService}**.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2.5 font-bold">3.</span>
                  <span>**Direct Verification Callback**: Slot calendar dispatches to **{lastSubmittedLead.email}** within 24 hours.</span>
                </li>
              </ul>
            </div>

            {/* Primary Action acknowledgment button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              id="success-modal-dismiss-btn"
              className="w-full py-3.5 font-display text-sm font-bold bg-[#00B5FF] hover:bg-[#0093D5] text-brand-dark rounded-xl tracking-wider transition uppercase"
            >
              Acknowledge Blueprint Blueprint
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
