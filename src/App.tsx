import { useState, useRef } from 'react';
import gsap from 'gsap';
import { Files, Search, GitBranch, Play, Settings, Monitor, Terminal as TerminalIcon } from 'lucide-react';

import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import Terminal from './components/Terminal';
import StatusBar from './components/StatusBar';
import VisualMode from './components/VisualMode';

export type AppFileType = 'about.ts' | 'experience.ts' | 'skills.json' | 'resume.md';

function App() {
  const [isDevMode, setIsDevMode] = useState(true);
  const [activeFile, setActiveFile] = useState<AppFileType>('about.ts');
  const [openFiles, setOpenFiles] = useState<AppFileType[]>(['about.ts', 'experience.ts', 'skills.json', 'resume.md']);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleMode = () => {
    // GSAP Fade out transition
    if (wrapperRef.current) {
      gsap.to(wrapperRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setIsDevMode(!isDevMode);
          // GSAP Fade in transition
          gsap.to(wrapperRef.current, {
            opacity: 1,
            duration: 0.5,
            delay: 0.1
          });
        }
      });
    } else {
      setIsDevMode(!isDevMode);
    }
  };

  const handleOpenFile = (file: AppFileType) => {
    if (!openFiles.includes(file)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFile(file);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  const handleCloseFile = (file: AppFileType, e: React.MouseEvent) => {
    e.stopPropagation();
    const newFiles = openFiles.filter(f => f !== file);
    setOpenFiles(newFiles);
    if (activeFile === file) {
      setActiveFile(newFiles.length > 0 ? newFiles[newFiles.length - 1] : 'about.ts');
    }
  };

  return (
    <>
      {/* Massive Glow Toggle Button */}
      <button 
        className={`mode-toggle ${isDevMode ? 'mode-toggle-dev' : 'mode-toggle-visual'}`}
        onClick={toggleMode}
      >
        {isDevMode ? <Monitor size={24} /> : <TerminalIcon size={24} />}
        {isDevMode ? 'Switch to Visual Mode' : 'Switch to Developer Mode'}
      </button>

      <div ref={wrapperRef} className="view-wrapper">
        {isDevMode ? (
          <div className="app-container">
            <div className="activity-bar">
              <div 
                className={`activity-icon ${isSidebarOpen ? 'active' : ''}`}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <Files size={28} strokeWidth={1.5} />
              </div>
              <div className="activity-icon"><Search size={28} strokeWidth={1.5} /></div>
              <div className="activity-icon"><GitBranch size={28} strokeWidth={1.5} /></div>
              <div className="activity-icon"><Play size={28} strokeWidth={1.5} /></div>
              <div style={{ flex: 1 }} />
              <div className="activity-icon"><Settings size={28} strokeWidth={1.5} /></div>
            </div>

            {isSidebarOpen && <Sidebar activeFile={activeFile} onOpenFile={handleOpenFile} />}

            <div className="editor-container">
              <Editor 
                activeFile={activeFile} 
                openFiles={openFiles} 
                onOpenFile={handleOpenFile}
                onCloseFile={handleCloseFile} 
              />
              <Terminal />
            </div>

            <StatusBar />
          </div>
        ) : (
          <VisualMode />
        )}
      </div>
    </>
  );
}

export default App;
