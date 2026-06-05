/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import LucideIcon from './LucideIcon';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a helpful chat bubble prompt after 5 seconds to invite direct interaction
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = '8801805971691'; // Orbitaxia Business WhatsApp Contact
  const prefilledMessage = encodeURIComponent(
    'Hello Orbitaxia! I am visiting your agency portal and would like to request a free consultation session.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none" id="whatsapp-floating-panel">
      
      {/* Dynamic Slide-in Message Prompt bubble */}
      {showTooltip && (
        <div 
          className="mb-3.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-brand-border text-slate-200 text-xs font-medium max-w-xs shadow-2xl flex items-center space-x-2 pointer-events-auto animate-in slide-in-from-bottom-2 fade-in"
          id="whatsapp-chat-bubble"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-sans leading-relaxed">
            Need pricing blueprints? Chat with our team live!
          </span>
          <button 
            onClick={() => setShowTooltip(false)}
            id="whatsapp-close-tooltip"
            className="text-slate-500 hover:text-white ml-1 cursor-pointer focus:outline-none"
            aria-label="Dismiss message banner"
          >
            <LucideIcon name="X" size={12} />
          </button>
        </div>
      )}

      {/* Primary Floating Action Badge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        id="whatsapp-floating-action-btn"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.65)] hover:scale-106 active:scale-95 transition-all duration-300 border border-emerald-400/20 cursor-pointer"
        aria-label="Message Orbitaxia on WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        {/* Pulsing Outer Aura Ripple */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 scale-100 group-hover:animate-ping opacity-75 -z-10" />

        {/* Custom High fidelity SVG WhatsApp Icon with perfect typography spacing */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>
      
    </div>
  );
}
