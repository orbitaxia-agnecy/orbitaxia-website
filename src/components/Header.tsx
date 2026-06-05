/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LucideIcon from './LucideIcon';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onContactClick: () => void;
}

export default function Header({ currentPage, onPageChange, onContactClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    onPageChange(id);
    setMobileMenuOpen(false);
    
    // Smooth scroll to top of window or specific viewport section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 glass-header w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Title */}
          <div 
            className="flex items-center cursor-pointer group"
            id="header-logo"
            onClick={() => handleNavClick('home')}
          >
            <img 
              src="https://www.image2url.com/r2/default/images/1780639454685-f9b7d924-56ce-4dc4-b6d7-896a620d04af.png" 
              alt="Orbitaxia" 
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              referrerPolicy="no-referrer" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? 'text-brand-secondary bg-brand-primary/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center" id="desktop-cta-container">
            <button
              onClick={onContactClick}
              id="cta-book-consultation-header"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-brand-dark font-display cursor-pointer hover:shadow-[0_0_20px_rgba(0,181,255,0.35)] transition-all duration-300 scale-100 hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Free Consultation
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden" id="mobile-menu-trigger-container">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/40 focus:outline-none"
              aria-label="Toggle menu"
            >
              <LucideIcon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden glass-header border-t border-brand-border absolute top-20 left-0 w-full animate-in fade-in slide-in-from-top duration-200"
          id="mobile-drawer-menu"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`flex w-full px-4 py-3 text-base font-semibold rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'text-brand-secondary bg-brand-primary/10 pl-6 border-l-4 border-brand-secondary'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/20'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-brand-border mt-4">
              <button
                onClick={() => {
                  onContactClick();
                  setMobileMenuOpen(false);
                }}
                id="cta-book-consultation-mobile"
                className="w-full py-3.5 text-center rounded-lg text-base font-bold bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-dark font-display"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
