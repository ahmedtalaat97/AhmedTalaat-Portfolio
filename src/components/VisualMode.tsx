import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { User, Briefcase, Code2, FileText, X } from 'lucide-react';

const widgets = [
  {
    id: 'about',
    title: 'ABOUT ME',
    icon: <User size={28} />,
    content: (
      <div className="about-container">
        <img 
          src="/profile.jpg" 
          alt="Ahmed Talaat" 
          className="about-img"
        />
        <div className="about-text-container">
          <h1 className="about-title">AHMED TALAAT</h1>
          <h2 className="about-subtitle">Full Stack Software Engineer</h2>
          <p className="about-p">
            Results-driven Software Engineer with proven expertise building secure, scalable, and high-performance full-stack applications using Go, React, Python, and Java.
            <br/><br/>
            Experienced in designing enterprise-grade banking systems, identity management solutions (OIDC), and interactive data portals inside Agile teams.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'experience',
    title: 'EXPERIENCE',
    icon: <Briefcase size={28} />,
    content: (
      <div>
        <div style={{ marginBottom: '40px' }}>
          <h2 className="exp-title">Software Engineer</h2>
          <h3 className="exp-job">Si-Ware Systems | Mar 2026 - Present</h3>
          <ul className="exp-list">
            <li>Co-developed full-stack features for MEDS Online Portal using Go (Gin) REST APIs and React 19.</li>
            <li>Customized Authentik (OIDC) authentication flows for account recovery.</li>
            <li>Enforced multi-tenant isolation and role-based access controls (RBAC).</li>
            <li>Developed scan result visualizations with Recharts.</li>
          </ul>
        </div>
        <div>
          <h2 className="exp-title">Java & T24 Engineer</h2>
          <h3 className="exp-job">Ejada | Aug 2025 - Mar 2026</h3>
          <ul className="exp-list">
            <li>Engineered custom Java routines within Temenos T24 banking platform.</li>
            <li>Developed core financial workflows ensuring compliance with international banking standards.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'skills',
    title: 'TECH STACK',
    icon: <Code2 size={28} />,
    content: (
      <div>
        <h2 className="skills-main-title">Core Technologies</h2>
        
        <h3 className="skills-cat-title">Backend & Core Banking</h3>
        <div className="skills-badge-container">
          {['Go (Golang)', 'Python', 'Java', 'Temenos T24', 'C#', 'Node.js', 'SQL'].map(s => (
            <span key={s} className="skills-badge">{s}</span>
          ))}
        </div>

        <h3 className="skills-cat-title">Frontend</h3>
        <div className="skills-badge-container">
          {['React 19', 'TypeScript', 'Angular', 'Tailwind CSS v4', 'Zustand', 'Recharts'].map(s => (
            <span key={s} className="skills-badge">{s}</span>
          ))}
        </div>

        <h3 className="skills-cat-title">Infrastructure & DevOps</h3>
        <div className="skills-badge-container">
          {['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Authentik (OIDC)', 'CI/CD'].map(s => (
            <span key={s} className="skills-badge">{s}</span>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'resume',
    title: 'RESUME',
    icon: <FileText size={28} />,
    content: (
      <div className="resume-container">
        <h2 className="resume-title">Full Details</h2>
        <p className="resume-p">
          For a complete breakdown of my educational background, certifications, and professional experience, please download my official CV.
        </p>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="resume-download-btn"
        >
          Download PDF Resume
        </a>
      </div>
    )
  }
];

const VisualMode = () => {
  const [activeWidget, setActiveWidget] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  const openModal = (id: string) => {
    setActiveWidget(id);
  };

  const closeModal = () => {
    // Animate out before clearing state
    if (modalRef.current && overlayRef.current) {
      gsap.to(modalRef.current, {
        scale: 0.8,
        y: 50,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => setActiveWidget(null)
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3
      });
    }
  };

  // Animate in when activeWidget changes to a value
  useEffect(() => {
    if (activeWidget && modalRef.current && overlayRef.current) {
      gsap.fromTo(modalRef.current, 
        { scale: 0.8, y: 50, opacity: 0, pointerEvents: 'none' },
        { scale: 1, y: 0, opacity: 1, pointerEvents: 'auto', duration: 0.4, ease: 'back.out(1.5)' }
      );
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.4
      });
    }
  }, [activeWidget]);

  const currentData = widgets.find(w => w.id === activeWidget);

  return (
    <div className="visual-mode-container">
      {/* 1. Unobstructed Background */}
      <div className="visual-bg"></div>
      
      {/* 2. Overlay (Dims ONLY when modal is open) */}
      <div className="visual-overlay" ref={overlayRef} onClick={closeModal}></div>
      
      {/* 3. The Central Modal (Pops up on click) */}
      <div className="modal-window" ref={modalRef}>
        {currentData && (
          <>
            <div className="modal-header">
              <div className="modal-title">
                <span className="modal-title-icon">{currentData.icon}</span>
                {currentData.title}
              </div>
              <button className="modal-close" onClick={closeModal}>
                <X size={18} strokeWidth={3} />
              </button>
            </div>
            <div className="modal-body">
              {currentData.content}
            </div>
          </>
        )}
      </div>

      {/* 4. The Dock / Widgets (Always at bottom) */}
      <div className="dock-container">
        {widgets.map(w => (
          <div 
            key={w.id} 
            className="dock-icon"
            onClick={() => openModal(w.id)}
          >
            {w.icon}
            <span className="dock-icon-label">{w.title}</span>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default VisualMode;
