/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Lead } from '../types';
import LucideIcon from './LucideIcon';

interface LeadTrackerProps {
  onAddDummyLead: () => void;
  refreshTrigger: number;
}

export default function LeadTracker({ onAddDummyLead, refreshTrigger }: LeadTrackerProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    const listLeads = () => {
      const stored = localStorage.getItem('orbitaxia_leads');
      if (stored) {
        try {
          setLeads(JSON.parse(stored));
        } catch (e) {
          console.error('Failed to parse leads', e);
        }
      } else {
        setLeads([]);
      }
    };
    listLeads();
  }, [refreshTrigger]);

  const updateLeadStatus = (leadId: string, status: 'new' | 'contacted' | 'completed') => {
    const updated = leads.map(l => l.id === leadId ? { ...l, status } : l);
    localStorage.setItem('orbitaxia_leads', JSON.stringify(updated));
    setLeads(updated);
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead({ ...selectedLead, status });
    }
  };

  const deleteLead = (leadId: string) => {
    const updated = leads.filter(l => l.id !== leadId);
    localStorage.setItem('orbitaxia_leads', JSON.stringify(updated));
    setLeads(updated);
    setSelectedLead(null);
  };

  const clearAllLeads = () => {
    localStorage.removeItem('orbitaxia_leads');
    setLeads([]);
    setSelectedLead(null);
  };

  return (
    <div className="bg-brand-card/80 border border-brand-border rounded-2xl p-6 shadow-2xl space-y-6 font-sans text-xs text-slate-300" id="lead-tracker-dashboard">
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-border pb-5">
        <div>
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#00B5FF] flex items-center">
            <LucideIcon name="Briefcase" className="mr-2 text-brand-secondary" size={16} />
            Orbitaxia Lead Storage Terminal
          </h3>
          <p className="text-slate-400 text-[11px] font-sans mt-0.5">
            Active developer workspace inspecting captured consultation requests (Stored securely in LocalStorage).
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onAddDummyLead}
            id="tracker-dummy-btn"
            className="px-3 py-1.5 rounded bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-secondary hover:text-white border border-brand-primary/25 text-[11px] font-semibold transition"
          >
            + Generate Test Lead
          </button>
          
          {leads.length > 0 && (
            <button
              onClick={clearAllLeads}
              id="tracker-clear-btn"
              className="px-3 py-1.5 rounded bg-rose-500/10 hover:bg-rose-500/20 text-rose-450 border border-rose-500/25 text-[11px] font-medium transition"
            >
              Clear Records
            </button>
          )}
        </div>
      </div>

      {leads.length === 0 ? (
        <div className="py-12 text-center space-y-3" id="tracker-empty-state">
          <div className="w-10 h-10 rounded-full bg-slate-800/85 flex items-center justify-center text-slate-500 mx-auto">
            <LucideIcon name="Mail" size={18} />
          </div>
          <div>
            <p className="font-semibold text-slate-300 text-sm">No Submitted Leads Yet</p>
            <p className="text-[11px] text-slate-450 mt-1 max-w-sm mx-auto">
              Any consultation submissions made through our primary Contact Form or service CTAs will appear here instantly with full analytics and data tags.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="tracker-records-grid">
          
          {/* Leads Listing Side-Bar */}
          <div className="lg:col-span-1 border border-brand-border/40 rounded-xl overflow-hidden divide-y divide-brand-border/30 bg-[#0A101C]" id="tracker-list-sidebar">
            <div className="bg-[#0D1525] p-3 text-[10px] font-mono uppercase font-bold tracking-wider text-slate-440 flex justify-between items-center">
              <span>Submissions: ({leads.length})</span>
              <span>Sorted: Newest First</span>
            </div>

            <div className="max-h-[320px] overflow-y-auto divide-y divide-brand-border/20">
              {leads.map((l) => (
                <div
                  key={l.id}
                  onClick={() => setSelectedLead(l)}
                  id={`lead-item-${l.id}`}
                  className={`p-3.5 cursor-pointer transition-colors text-left ${
                    selectedLead?.id === l.id 
                      ? 'bg-brand-primary/10 border-l-4 border-brand-secondary' 
                      : 'hover:bg-brand-card/25'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-slate-200 block truncate max-w-[120px] font-sans">
                      {l.fullName}
                    </span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded uppercase font-mono font-bold ${
                      l.status === 'new' 
                        ? 'bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20' 
                        : l.status === 'contacted'
                        ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    }`}>
                      {l.status}
                    </span>
                  </div>

                  <p className="text-[10px] text-slate-400 truncate mt-1 font-mono">
                    {l.interestedService}
                  </p>

                  <div className="flex justify-between items-center mt-2.5 text-[9px] text-slate-500">
                    <span className="truncate max-w-[100px]">{l.companyName || 'SME Business'}</span>
                    <span>{new Date(l.submittedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details Core Panel */}
          <div className="lg:col-span-2 border border-brand-border/40 rounded-xl p-5 bg-[#0A101C] flex flex-col justify-between" id="tracker-detail-panel">
            {selectedLead ? (
              <div className="space-y-4" id={`lead-detail-content-${selectedLead.id}`}>
                
                {/* Header detail */}
                <div className="flex flex-wrap justify-between items-start gap-3 border-b border-brand-border/30 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-white font-sans">{selectedLead.fullName}</h4>
                    <p className="text-[10.5px] text-slate-400 mt-1">
                      Registered Email: <a href={`mailto:${selectedLead.email}`} className="text-brand-secondary hover:underline">{selectedLead.email}</a>
                    </p>
                  </div>
                  
                  {/* Status update select */}
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] font-mono text-slate-450 uppercase">Update:</span>
                    <select
                      value={selectedLead.status}
                      id={`lead-status-select-${selectedLead.id}`}
                      onChange={(e) => updateLeadStatus(selectedLead.id, e.target.value as any)}
                      className="bg-[#121A2C] border border-brand-border text-slate-300 text-[10px] rounded px-1.5 py-1 focus:outline-none focus:border-brand-secondary"
                    >
                      <option value="new">New Inquiry</option>
                      <option value="contacted">Contacted</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>

                {/* Grid details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-430 uppercase block">Phone Contact:</span>
                    <a href={`tel:${selectedLead.phone}`} className="text-slate-200 font-semibold font-mono hover:text-brand-secondary">
                      {selectedLead.phone || 'N/A'}
                    </a>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-430 uppercase block">Company Designation:</span>
                    <span className="text-slate-200 font-semibold">
                      {selectedLead.companyName} ({selectedLead.businessType})
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-430 uppercase block">Target Channel:</span>
                    <span className="text-brand-secondary font-semibold font-mono">
                      {selectedLead.interestedService}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-430 uppercase block">Submitted At:</span>
                    <span className="text-slate-350 font-mono">
                      {new Date(selectedLead.submittedAt).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Message Body */}
                <div className="bg-[#121E32]/45 rounded-lg p-3 border border-brand-border/20">
                  <span className="text-[10px] font-mono text-[#00B5FF] uppercase block mb-1">
                    Client's Message:
                  </span>
                  <p className="text-[11.5px] text-slate-300 leading-relaxed font-sans whitespace-pre-wrap">
                    {selectedLead.message || 'No custom message specified.'}
                  </p>
                </div>

                {/* Danger button */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => deleteLead(selectedLead.id)}
                    id={`lead-delete-btn-${selectedLead.id}`}
                    className="text-[10px] font-semibold text-rose-500 hover:text-rose-400 hover:underline flex items-center space-x-1"
                  >
                    <LucideIcon name="X" size={11} />
                    <span>Purge This Entry</span>
                  </button>
                </div>

              </div>
            ) : (
              <div className="h-full flex items-center justify-center py-16 text-slate-500 italic font-medium" id="tracker-unselected-msg">
                <span>Select a lead submission from the left panel to examine client telemetry details.</span>
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
}
