import React, { useState, useEffect, useRef } from 'react';
import { TERMINAL_COMMANDS } from '../constants';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['']);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const prompt = 'aayush@portfolio:~$ ';
    const newHistory = [...history, `${prompt} ${cmd}`];

    if (trimmedCmd === 'clear') {
      setHistory([]);
    } else if (TERMINAL_COMMANDS[trimmedCmd as keyof typeof TERMINAL_COMMANDS]) {
      setHistory([...newHistory, ...TERMINAL_COMMANDS[trimmedCmd as keyof typeof TERMINAL_COMMANDS]]);
    } else if (trimmedCmd === '') {
      setHistory([...newHistory]);
    } else {
      setHistory([...newHistory, `bash: ${trimmedCmd}: command not found`, '']);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div 
      ref={terminalRef}
      className="h-full bg-black text-green-400 font-mono text-base p-6 overflow-auto custom-scrollbar"
    >
      <div className="space-y-1">
        {history.map((line, index) => {
          if (line.startsWith('aayush@portfolio:~$')) {
            const prompt = 'aayush@portfolio:~$';
            const command = line.slice(prompt.length).trim();
            return (
              <div key={index} style={{ whiteSpace: 'pre' }}>
                <span className="text-green-400">{prompt}</span>
                {command && <span className="text-white"> {command}</span>}
              </div>
            );
          }
          return (
            <div 
              key={index} 
              className="text-white"
              style={{ whiteSpace: 'pre' }}
            >
              {line}
            </div>
          );
        })}
      </div>

      <div className="flex items-center mt-2">
        <span className="text-green-400 select-none">aayush@portfolio:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="bg-transparent text-white outline-none flex-1 ml-3"
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;