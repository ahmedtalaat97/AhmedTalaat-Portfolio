import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { User, Briefcase, Code2, FileText, X } from 'lucide-react';

const widgets = [
  {
    id: 'about',
    title: 'ABOUT ME',
    icon: <User size={28} />,
    content: (
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
        <img 
          src="/profile.jpg" 
          alt="Ahmed Talaat" 
          style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', border: '4px solid rgba(79, 172, 254, 0.5)', boxShadow: '0 15px 30px rgba(0,0,0,0.5)' }} 
        />
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ fontSize: '3.5rem', margin: '0 0 10px 0', color: '#fff', fontWeight: 900 }}>AHMED TALAAT</h1>
          <h2 style={{ fontSize: '1.5rem', color: '#4facfe', margin: '0 0 30px 0', textTransform: 'uppercase', letterSpacing: '2px' }}>Full Stack Software Engineer</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#cbd5e1', maxWidth: '800px' }}>
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
          <h2 style={{ fontSize: '2rem', color: '#fff', margin: '0 0 5px 0' }}>Software Engineer</h2>
          <h3 style={{ fontSize: '1.2rem', color: '#4facfe', margin: '0 0 15px 0' }}>Si-Ware Systems | Mar 2026 - Present</h3>
          <ul style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>Co-developed full-stack features for MEDS Online Portal using Go (Gin) REST APIs and React 19.</li>
            <li>Customized Authentik (OIDC) authentication flows for account recovery.</li>
            <li>Enforced multi-tenant isolation and role-based access controls (RBAC).</li>
            <li>Developed scan result visualizations with Recharts.</li>
          </ul>
        </div>
        <div>
          <h2 style={{ fontSize: '2rem', color: '#fff', margin: '0 0 5px 0' }}>Java & T24 Engineer</h2>
          <h3 style={{ fontSize: '1.2rem', color: '#4facfe', margin: '0 0 15px 0' }}>Ejada | Aug 2025 - Mar 2026</h3>
          <ul style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8', paddingLeft: '20px' }}>
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
        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '20px' }}>Core Technologies</h2>
        
        <h3 style={{ color: '#4facfe', marginTop: '20px', marginBottom: '10px' }}>Backend & Core Banking</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['Go (Golang)', 'Python', 'Java', 'Temenos T24', 'C#', 'Node.js', 'SQL'].map(s => (
            <span key={s} style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '8px', fontSize: '1.1rem', border: '1px solid rgba(255,255,255,0.1)' }}>{s}</span>
          ))}
        </div>

        <h3 style={{ color: '#4facfe', marginTop: '30px', marginBottom: '10px' }}>Frontend</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['React 19', 'TypeScript', 'Angular', 'Tailwind CSS v4', 'Zustand', 'Recharts'].map(s => (
            <span key={s} style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '8px', fontSize: '1.1rem', border: '1px solid rgba(255,255,255,0.1)' }}>{s}</span>
          ))}
        </div>

        <h3 style={{ color: '#4facfe', marginTop: '30px', marginBottom: '10px' }}>Infrastructure & DevOps</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Authentik (OIDC)', 'CI/CD'].map(s => (
            <span key={s} style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '8px', fontSize: '1.1rem', border: '1px solid rgba(255,255,255,0.1)' }}>{s}</span>
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px' }}>Full Details</h2>
        <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px', maxWidth: '500px', lineHeight: '1.6', textAlign: 'center' }}>
          For a complete breakdown of my educational background, certifications, and professional experience, please download my official CV.
        </p>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            color: 'white',
            textDecoration: 'none',
            padding: '20px 40px',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            boxShadow: '0 10px 20px rgba(79, 172, 254, 0.3)'
          }}
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
                <span style={{ color: '#4facfe' }}>{currentData.icon}</span>
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
