import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CertificateDetailModal } from './components/CertificateDetailModal';
import { Toast } from './components/Toast';
import { PROFILE_DATA } from './data/portfolioData';
import { ProjectItem, CertificateItem, ToastMessage } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    const newToast: ToastMessage = { id, message, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      dismissToast(id);
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-[#E2E8F0] relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Toast Notification Container */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          profile={PROFILE_DATA}
          onOpenResume={() => setIsResumeOpen(true)}
          onContactClick={scrollToContact}
          onProjectsClick={scrollToProjects}
        />

        {/* 2. About Me Section */}
        <AboutSection profile={PROFILE_DATA} />

        {/* 3. Skills Section */}
        <SkillsSection />

        {/* 4. Education Timeline Section */}
        <EducationSection />

        {/* 5. Projects Section */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 6. Certificates Section */}
        <CertificatesSection onSelectCertificate={(c) => setSelectedCertificate(c)} />

        {/* 7. Contact Section */}
        <ContactSection profile={PROFILE_DATA} onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer profile={PROFILE_DATA} onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={PROFILE_DATA}
        onShowToast={showToast}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateDetailModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
}
