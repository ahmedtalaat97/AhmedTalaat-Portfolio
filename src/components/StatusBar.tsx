import { GitBranch, XCircle, AlertTriangle, Radio } from 'lucide-react';

const StatusBar = () => {
  return (
    <div className="status-bar">
      <div style={{ display: 'flex', height: '100%' }}>
        <div className="status-item" style={{ backgroundColor: '#0066b8' }}>
          <GitBranch size={14} /> main
        </div>
        <div className="status-item">
          <XCircle size={14} /> 0 <AlertTriangle size={14} style={{ marginLeft: 5 }} /> 0
        </div>
        <div className="status-item">
          <Radio size={14} /> 8080
        </div>
      </div>
      
      <div style={{ display: 'flex', height: '100%' }}>
        <div className="status-item">Ln 42, Col 12</div>
        <div className="status-item">Spaces: 2</div>
        <div className="status-item">UTF-8</div>
        <div className="status-item">CRLF</div>
        <div className="status-item">TypeScript React</div>
      </div>
    </div>
  );
};

export default StatusBar;
