import React from 'react';
import { 
  X, 
  Award, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  BookCheck,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { CertificateItem } from '../types';

interface CertificateDetailModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateDetailModal: React.FC<CertificateDetailModalProps> = ({
  certificate,
  onClose
}) => {
  if (!certificate) return null;

  return (
    <div
      id="cert-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="cert-detail-modal-container"
        className="relative w-full max-w-lg flex flex-col bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Certificate Card Header */}
        <div className="p-6 bg-gradient-to-br from-amber-600/20 via-slate-900 to-indigo-950/40 border-b border-slate-800 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close certificate modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-500/10">
            <Award className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-900/90 text-amber-300 border border-amber-500/30">
              Verified {certificate.type}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {certificate.issueDate}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-1">
            {certificate.title}
          </h3>
          <p className="text-xs font-medium text-amber-300/90">
            Issued by {certificate.issuer}
          </p>
        </div>

        {/* Certificate Content */}
        <div className="p-6 space-y-5 text-slate-300 text-sm">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Course &amp; Assessment Scope
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {certificate.description}
            </p>
          </div>

          {/* Credential ID info */}
          {certificate.credentialId && (
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                Official Credential Reference ID
              </div>
              <div className="font-mono text-xs text-indigo-300 select-all">
                {certificate.credentialId}
              </div>
            </div>
          )}

          {/* Competencies Validated */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Competencies &amp; Skills Verified
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {certificate.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 font-medium"
                >
                  &check; {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#090D16]/90 flex items-center justify-between gap-3">
          {certificate.credentialUrl ? (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 shadow-md shadow-amber-600/25 transition-colors"
            >
              <span>View Credential URL</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs text-slate-400">Verified via Coursework</span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs text-slate-300 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
