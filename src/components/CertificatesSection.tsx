import React from 'react';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  CheckCircle, 
  ShieldCheck, 
  BookCheck,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { CertificateItem } from '../types';

interface CertificatesSectionProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onSelectCertificate }) => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-indigo-500 rounded-full mb-4" />
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Verified online coursework, competitive assessments, and technical credentials completed during my BCA studies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES_DATA.map((cert) => (
            <div
              key={cert.id}
              id={`certificate-card-${cert.id}`}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                    {cert.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-indigo-400 mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Issued: {cert.issueDate}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills verified */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800/80 text-[10px] text-slate-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action / View Details */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  ID: {cert.credentialId?.slice(0, 15)}...
                </span>

                <button
                  onClick={() => onSelectCertificate(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
