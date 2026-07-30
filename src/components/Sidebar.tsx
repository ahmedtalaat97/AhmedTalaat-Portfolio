import { FileCode, FileJson, FileText, ChevronDown } from 'lucide-react';
import type { AppFileType } from '../App';

interface Props {
  activeFile: AppFileType;
  onOpenFile: (file: AppFileType) => void;
}

const Sidebar = ({ activeFile, onOpenFile }: Props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Explorer</div>
      
      <div className="sidebar-folder">
        <ChevronDown size={16} style={{ marginRight: '5px' }} /> PORTFOLIO
      </div>
      
      <div 
        className={`sidebar-file ${activeFile === 'about.ts' ? 'active' : ''}`}
        onClick={() => onOpenFile('about.ts')}
      >
        <FileCode size={16} className="file-icon" color="#519aba" />
        about.ts
      </div>

      <div 
        className={`sidebar-file ${activeFile === 'experience.ts' ? 'active' : ''}`}
        onClick={() => onOpenFile('experience.ts')}
      >
        <FileCode size={16} className="file-icon" color="#519aba" />
        experience.ts
      </div>

      <div 
        className={`sidebar-file ${activeFile === 'skills.json' ? 'active' : ''}`}
        onClick={() => onOpenFile('skills.json')}
      >
        <FileJson size={16} className="file-icon" color="#cbcb41" />
        skills.json
      </div>

      <div 
        className={`sidebar-file ${activeFile === 'resume.md' ? 'active' : ''}`}
        onClick={() => onOpenFile('resume.md')}
      >
        <FileText size={16} className="file-icon" color="#519aba" />
        resume.md
      </div>
    </div>
  );
};

export default Sidebar;
