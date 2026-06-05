/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LucideIcon from './LucideIcon';

interface FooterProps {
  onPageChange: (page: string) => void;
  onContactClick: () => void;
}

export default function Footer({ onPageChange, onContactClick }: FooterProps) {
  
  const handleLinkClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker border-t border-brand-border/60 text-slate-400" id="app-footer">
      
      {/* Upper Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo Column */}
          <div className="md:col-span-1 flex flex-col space-y-4" id="footer-brand-column">
            <div className="flex items-center cursor-pointer group" onClick={() => handleLinkClick('home')}>
              <img 
                src="https://www.image2url.com/r2/default/images/1780639454685-f9b7d924-56ce-4dc4-b6d7-896a620d04af.png" 
                alt="Orbitaxia" 
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed font-sans max-w-xs">
              "Scaling Brands Beyond Limits." A premium digital marketing and creative engineering agency in Bangladesh serving global corporate standards.
            </p>

            {/* Social handles */}
            <div className="flex items-center space-x-3 pt-3" id="footer-socials">
              <a 
                href="https://www.facebook.com/orbitaxia" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-brand-border/40 hover:border-brand-secondary text-slate-400 hover:text-brand-secondary flex items-center justify-center transition-all"
                aria-label="Facebook Link"
              >
                <LucideIcon name="Facebook" size={16} />
              </a>
              <a 
                href="https://www.instagram.com/orbitaxia/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-brand-border/40 hover:border-brand-secondary text-slate-400 hover:text-brand-secondary flex items-center justify-center transition-all"
                aria-label="Instagram Link"
              >
                <LucideIcon name="Instagram" size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/company/orbitaxialtd" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-brand-border/40 hover:border-brand-secondary text-slate-400 hover:text-brand-secondary flex items-center justify-center transition-all"
                aria-label="LinkedIn Link"
              >
                <LucideIcon name="Linkedin" size={15} />
              </a>
            </div>
          </div>

          {/* Practical Links Mapping */}
          <div className="flex flex-col space-y-4" id="footer-navigation-column">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-semibold text-[#00B5FF]">
              Agency Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('home')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home Landing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('services')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Core Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('about')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Orbitaxia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('portfolio')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Success Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Get In Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Specialties */}
          <div className="flex flex-col space-y-4" id="footer-specialties-column">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-semibold text-[#00B5FF]">
              Our Expertise
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-brand-primary transition-colors cursor-default">Meta Ads Architectures</li>
              <li className="hover:text-brand-primary transition-colors cursor-default">Google Intent Campaigning</li>
              <li className="hover:text-brand-primary transition-colors cursor-default">High Performance App Coding</li>
              <li className="hover:text-brand-primary transition-colors cursor-default">Advanced Local SEO Systems</li>
              <li className="hover:text-brand-primary transition-colors cursor-default">Premium Creative Brandmarks</li>
              <li className="hover:text-brand-primary transition-colors cursor-default">High Retention Reels/Video</li>
            </ul>
          </div>

          {/* Business Coordinates Column */}
          <div className="flex flex-col space-y-4" id="footer-contact-column">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-semibold text-[#00B5FF]">
              Address
            </h4>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start space-x-3">
                <LucideIcon name="MapPin" className="text-brand-secondary shrink-0 mt-0.5" size={16} />
                <span className="leading-relaxed text-slate-300">
                  524/Chandpur, Ahmed Nagar,<br />
                  Sadar Dakshine, Cumilla-3500,<br />
                  Bangladesh
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <LucideIcon name="Mail" className="text-brand-secondary shrink-0" size={16} />
                <a href="mailto:orbitaxia@gamil.com" className="text-slate-300 hover:text-white transition-colors">
                  orbitaxia@gamil.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <LucideIcon name="Phone" className="text-brand-secondary shrink-0" size={16} />
                <a href="tel:+8801805971691" className="text-slate-300 hover:text-white transition-colors">
                  +880 1805 971691
                </a>
              </div>
            </div>

            <button 
              onClick={onContactClick} 
              id="footer-inline-cta"
              className="mt-2 text-xs font-semibold tracking-wide flex items-center text-brand-secondary hover:text-white transition-colors group"
            >
              <span>Book Appointment Slot</span>
              <LucideIcon name="ArrowRight" className="ml-1.5 transform group-hover:translate-x-1 transition-transform" size={12} />
            </button>
          </div>

        </div>

        {/* Lower Banner Section */}
        <div className="mt-16 pt-8 border-t border-brand-border/40 flex flex-col sm:flex-row items-center justify-between text-xs space-y-3 sm:space-y-0 text-slate-500">
          <div>
            &copy; {currentYear} Orbitaxia. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-slate-400 cursor-default transition-colors">Bangladesh Localized Systems</span>
            <button 
              onClick={() => handleLinkClick('privacy')} 
              className="hover:text-slate-400 cursor-pointer transition-colors focus:outline-none text-left"
            >
              Privacy Charter
            </button>
            <span className="hover:text-slate-400 cursor-default transition-colors">Terms of Engagement</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
