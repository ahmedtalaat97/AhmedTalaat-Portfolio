import { FileCode, FileJson, FileText, X } from 'lucide-react';
import type { AppFileType } from '../App';

interface Props {
  activeFile: AppFileType;
  openFiles: AppFileType[];
  onOpenFile: (file: AppFileType) => void;
  onCloseFile: (file: AppFileType, e: React.MouseEvent) => void;
}

const getFileIcon = (file: AppFileType) => {
  if (file.endsWith('.ts')) return <FileCode size={14} style={{ marginRight: '6px' }} color="#519aba" />;
  if (file.endsWith('.json')) return <FileJson size={14} style={{ marginRight: '6px' }} color="#cbcb41" />;
  return <FileText size={14} style={{ marginRight: '6px' }} color="#519aba" />;
};

const Editor = ({ activeFile, openFiles, onOpenFile, onCloseFile }: Props) => {
  return (
    <div className="editor-container" style={{ flex: 1 }}>
      {/* Tabs */}
      <div className="tabs-bar">
        {openFiles.map(file => (
          <div 
            key={file} 
            className={`tab ${activeFile === file ? 'active' : ''}`}
            onClick={() => onOpenFile(file)}
          >
            {getFileIcon(file)}
            {file}
            <div 
              className="tab-close" 
              style={{ marginLeft: '8px', padding: '2px', borderRadius: '4px' }}
              onClick={(e) => onCloseFile(file, e)}
            >
              <X size={14} />
            </div>
          </div>
        ))}
      </div>

      {/* Editor Content */}
      <div className="editor-content">
        <div className="line-numbers">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        
        <div className="code-area">
          {activeFile === 'about.ts' && <AboutFile />}
          {activeFile === 'experience.ts' && <ExperienceFile />}
          {activeFile === 'skills.json' && <SkillsFile />}
          {activeFile === 'resume.md' && <ResumeFile />}
        </div>
      </div>
    </div>
  );
};

// --- File Contents with Syntax Highlighting Simulation ---

const AboutFile = () => (
  <div>
    <span className="cmt">/**</span><br/>
    <span className="cmt"> * Ahmed Talaat Mohamed</span><br/>
    <span className="cmt"> * Full Stack Developer</span><br/>
    <span className="cmt"> */</span><br/>
    <br/>
    <span className="kw">import</span> <span className="typ">React</span> <span className="kw">from</span> <span className="str">'react'</span>;<br/>
    <br/>
    <span className="kw">export const</span> <span className="fn">getProfile</span> = () <span className="kw">=&gt;</span> {'{'}<br/>
    {'  '}<span className="kw">return</span> {'{'}<br/>
    {'    '}<span className="prop">name</span>: <span className="str">"Ahmed Talaat Mohamed"</span>,<br/>
    {'    '}<span className="prop">title</span>: <span className="str">"Software Engineer — Full Stack Developer"</span>,<br/>
    {'    '}<span className="prop">location</span>: <span className="str">"Alexandria, Egypt (Ready to Relocate)"</span>,<br/>
    {'    '}<span className="prop">contact</span>: {'{'}<br/>
    {'      '}<span className="prop">phone</span>: <span className="str">"+2 01025925154"</span>,<br/>
    {'      '}<span className="prop">email</span>: <span className="str">"atalaat635@gmail.com"</span>,<br/>
    {'      '}<span className="prop">github</span>: <span className="str">"github.com/ahmedtalaat97"</span>,<br/>
    {'      '}<span className="prop">linkedin</span>: <span className="str">"linkedin.com/in/ahmed-talaat97"</span><br/>
    {'    '}{'}'},<br/>
    {'    '}<span className="prop">summary</span>: <span className="str">"Results-driven Software Engineer with proven expertise building secure, scalable, and high-performance full-stack applications using Go, React, Python, and Java. Experienced in designing enterprise-grade banking systems (Temenos T24), identity management solutions (OIDC), and interactive data portals. Adept at bridging hardware calibration integrations with modern web services inside Agile teams."</span><br/>
    {'  '}{'}'};<br/>
    {'}'};<br/>
  </div>
);

const ExperienceFile = () => (
  <div>
    <span className="kw">interface</span> <span className="typ">Experience</span> {'{'}<br/>
    {'  '}<span className="prop">company</span>: <span className="typ">string</span>;<br/>
    {'  '}<span className="prop">role</span>: <span className="typ">string</span>;<br/>
    {'  '}<span className="prop">duration</span>: <span className="typ">string</span>;<br/>
    {'  '}<span className="prop">technologies</span>: <span className="typ">string</span>[];<br/>
    {'  '}<span className="prop">highlights</span>: <span className="typ">string</span>[];<br/>
    {'}'}<br/>
    <br/>
    <span className="kw">export const</span> <span className="var">workHistory</span>: <span className="typ">Experience</span>[] = [<br/>
    {'  '}{'{'}<br/>
    {'    '}<span className="prop">company</span>: <span className="str">"Si-Ware Systems"</span>,<br/>
    {'    '}<span className="prop">role</span>: <span className="str">"Software Engineer — Full Stack Developer"</span>,<br/>
    {'    '}<span className="prop">duration</span>: <span className="str">"Mar 2026 – Present"</span>,<br/>
    {'    '}<span className="prop">technologies</span>: [<span className="str">"Go"</span>, <span className="str">"React 19"</span>, <span className="str">"TypeScript"</span>, <span className="str">"PostgreSQL"</span>, <span className="str">"Authentik"</span>],<br/>
    {'    '}<span className="prop">highlights</span>: [<br/>
    {'      '}<span className="str">"Co-developed full-stack features for MEDS Online Portal using Go (Gin) REST APIs and React 19."</span>,<br/>
    {'      '}<span className="str">"Customized Authentik (OIDC) authentication flows for account recovery and RBAC."</span>,<br/>
    {'      '}<span className="str">"Developed scan result visualizations with Recharts and resolved CORS constraints."</span>,<br/>
    {'    '}]<br/>
    {'  '}{'},'}<br/>
    {'  '}{'{'}<br/>
    {'    '}<span className="prop">company</span>: <span className="str">"Ejada (Client: Emkan Finance)"</span>,<br/>
    {'    '}<span className="prop">role</span>: <span className="str">"Software Engineer — T24 & Java Developer"</span>,<br/>
    {'    '}<span className="prop">duration</span>: <span className="str">"Aug 2025 – Mar 2026"</span>,<br/>
    {'    '}<span className="prop">technologies</span>: [<span className="str">"Java"</span>, <span className="str">"Temenos T24"</span>, <span className="str">"RESTful APIs"</span>, <span className="str">"Oracle DB"</span>],<br/>
    {'    '}<span className="prop">highlights</span>: [<br/>
    {'      '}<span className="str">"Engineered custom Java routines within Temenos T24 to optimize transaction flows."</span>,<br/>
    {'      '}<span className="str">"Developed core financial workflows ensuring compliance with international standards."</span><br/>
    {'    '}]<br/>
    {'  '}{'}'}<br/>
    {'];'}<br/>
  </div>
);

const SkillsFile = () => (
  <div>
    {'{'}<br/>
    {'  '}<span className="prop">"languages"</span>: [<span className="str">"Go (Golang)"</span>, <span className="str">"C#"</span>, <span className="str">"Python"</span>, <span className="str">"Java"</span>, <span className="str">"JavaScript"</span>, <span className="str">"TypeScript"</span>, <span className="str">"SQL"</span>],<br/>
    {'  '}<span className="prop">"frontend"</span>: [<br/>
    {'    '}<span className="str">"React 19"</span>, <span className="str">"Angular"</span>, <span className="str">"HTML5"</span>, <span className="str">"CSS3"</span>, <br/>
    {'    '}<span className="str">"Tailwind CSS v4"</span>, <span className="str">"Radix UI"</span>, <span className="str">"Zustand"</span>, <span className="str">"Recharts"</span><br/>
    {'  '}],<br/>
    {'  '}<span className="prop">"backend"</span>: [<span className="str">"Go (Gin)"</span>, <span className="str">"ASP.NET Core"</span>, <span className="str">"Node.js"</span>, <span className="str">"Express"</span>, <span className="str">"RESTful APIs"</span>],<br/>
    {'  '}<span className="prop">"banking"</span>: [<span className="str">"Temenos T24"</span>, <span className="str">"Core Banking Integrations"</span>],<br/>
    {'  '}<span className="prop">"databases"</span>: [<span className="str">"PostgreSQL"</span>, <span className="str">"SQL Server"</span>, <span className="str">"MongoDB"</span>, <span className="str">"Redis"</span>],<br/>
    {'  '}<span className="prop">"devops"</span>: [<span className="str">"Authentik (OIDC)"</span>, <span className="str">"Docker"</span>, <span className="str">"Git"</span>, <span className="str">"CI/CD"</span>, <span className="str">"Nginx"</span>]<br/>
    {'}'}<br/>
  </div>
);

const ResumeFile = () => (
  <div>
    <span className="md-h1"># Ahmed Talaat Mohamed</span><br/>
    <span className="md-h2">## Software Engineer — Full Stack Developer</span><br/>
    <br/>
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="md-link" style={{ display: 'inline-block', marginBottom: '20px', padding: '10px 20px', backgroundColor: '#007fd4', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Download Full PDF</a><br/>
    <br/>
    Alexandria, Egypt (Ready to Relocate) | +2 01025925154<br/>
    <a href="mailto:atalaat635@gmail.com" className="md-link">atalaat635@gmail.com</a> | <a href="https://linkedin.com/in/ahmed-talaat97" target="_blank" rel="noopener noreferrer" className="md-link">LinkedIn</a> | <a href="https://github.com/ahmedtalaat97" target="_blank" rel="noopener noreferrer" className="md-link">GitHub</a><br/>
    <br/>
    <span className="md-h2">## SUMMARY</span><br/>
    Results-driven Software Engineer with proven expertise building secure, scalable, and high-performance full-stack applications using Go, React, Python, and Java. Experienced in designing enterprise-grade banking systems (Temenos T24), identity management solutions (OIDC), and interactive data portals. Adept at bridging hardware calibration integrations with modern web services inside Agile teams.<br/>
    <br/>
    <span className="md-h2">## PROFESSIONAL EXPERIENCE</span><br/>
    <br/>
    **Software Engineer — Full Stack Developer** | Si-Ware Systems (Mar 2026 – Present)<br/>
    Technologies: Go, React 19, TypeScript, Tailwind CSS v4, Zustand, Python, PyQt, PostgreSQL, Authentik (OIDC)<br/>
    - Co-developed full-stack features for the MEDS Online Portal using Go (Gin) REST APIs and React 19.<br/>
    - Customized Authentik (OIDC) authentication flows to isolate account recovery.<br/>
    - Enforced multi-tenant isolation and role-based access controls (RBAC) to prevent privilege escalation.<br/>
    - Developed scan result visualizations with Recharts and resolved CORS constraints.<br/>
    - Engineered client-side state management to cache and dynamically reset scan filters.<br/>
    - Optimized database querying for batch-upload failure recovery and timezone-aware filtering.<br/>
    - Refactored the PyQt Desktop App, integrating automated database backups and spectrometer calibration DLLs.<br/>
    <br/>
    **Software Engineer — T24 & Java Developer** | Ejada (Client: Emkan Finance) (Aug 2025 – Mar 2026)<br/>
    Technologies: Java, Temenos T24, RESTful APIs, Oracle DB, Agile<br/>
    - Engineered custom Java routines and backend business logic within Temenos T24 to optimize transaction flows.<br/>
    - Developed core financial workflows and integrated secure enterprise APIs, ensuring compliance with standards.<br/>
    - Collaborated in an Agile structure to design schemas and system integrations across banking modules.<br/>
    <br/>
    <span className="md-h2">## EDUCATION</span><br/>
    - Information Technology Institute (ITI) (Oct 2024 – Jul 2025): Professional Development and BI-Infused CRM Track<br/>
    - Alexandria University, Faculty of Engineering (2015 – 2020): Bachelor of Science in Civil Engineering<br/>
    <br/>
    <span className="md-h2">## COURSES & CERTIFICATIONS</span><br/>
    - Full Stack .NET / Angular Diploma — Route Academy<br/>
    - Web Design Diploma — NTI<br/>
    - Docker Certified Associate Prep — KodeKloud<br/>
    - Oracle Cloud Infrastructure (OCI) Foundations Associate<br/>
  </div>
);

export default Editor;
