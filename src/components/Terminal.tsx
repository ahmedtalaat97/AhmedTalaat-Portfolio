import { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [activeTab, setActiveTab] = useState('TERMINAL');
  const [logs, setLogs] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial boot sequence animation
    const bootLogs = [
      "Starting AhmedTalaat_Portfolio v2.0.0...",
      "Loading dependencies...",
      "Compiling full-stack experience...",
      "Fetching skills...",
      "Success! Portfolio compiled successfully in 143ms.",
      "Listening on http://localhost:8080"
    ];

    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLog]]);
        currentLog++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  return (
    <div className="panel-container">
      <div className="panel-tabs">
        <div className={`panel-tab ${activeTab === 'PROBLEMS' ? 'active' : ''}`} onClick={() => setActiveTab('PROBLEMS')}>PROBLEMS</div>
        <div className={`panel-tab ${activeTab === 'OUTPUT' ? 'active' : ''}`} onClick={() => setActiveTab('OUTPUT')}>OUTPUT</div>
        <div className={`panel-tab ${activeTab === 'DEBUG CONSOLE' ? 'active' : ''}`} onClick={() => setActiveTab('DEBUG CONSOLE')}>DEBUG CONSOLE</div>
        <div className={`panel-tab ${activeTab === 'TERMINAL' ? 'active' : ''}`} onClick={() => setActiveTab('TERMINAL')}>TERMINAL</div>
      </div>
      
      <div className="terminal-content">
        {activeTab === 'TERMINAL' ? (
          <>
            {logs.map((log, i) => (
              <div key={i}>
                <span className="terminal-dir">PS D:\Portfolio&gt;</span> {log}
              </div>
            ))}
            <div>
              <span className="terminal-dir">PS D:\Portfolio&gt;</span> <span className="cursor-blink"></span>
            </div>
            <div ref={terminalEndRef} />
          </>
        ) : (
          <div style={{ color: '#858585' }}>No problems have been detected in the workspace.</div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
