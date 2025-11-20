import React, { useState, useEffect, useRef } from 'react';
import { TERMINAL_COMMANDS } from '../constants';

const PROMPT = 'aayush@portfolio:~$';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const output: string[] = [];

    output.push(`${PROMPT} ${raw}`);

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cmd in TERMINAL_COMMANDS) {
      output.push(...TERMINAL_COMMANDS[cmd as keyof typeof TERMINAL_COMMANDS]);
    } else if (cmd !== '') {
      output.push(`bash: ${cmd}: command not found`);
    }

    setHistory((prev) => [...prev, ...output]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    const t = terminalRef.current;
    if (t) t.scrollTop = t.scrollHeight;
  }, [history]);

  return (
    <div
      ref={terminalRef}
      className="terminal-container h-full bg-black text-green-400 font-mono text-base p-4 sm:p-6 lg:p-8 overflow-auto"
    >
      <div className="space-y-1">
        {history.map((line, i) => {
          const isPrompt = line.startsWith(PROMPT);
          if (isPrompt) {
            const cmd = line.replace(PROMPT, '').trim();
            return (
              <div key={i} className="whitespace-pre">
                <span className="text-green-400">{PROMPT}</span>
                {cmd && <span className="text-white"> {cmd}</span>}
              </div>
            );
          }
          return (
            <div key={i} className="text-white whitespace-pre">
              {line}
            </div>
          );
        })}
      </div>

      <div className="flex items-center mt-2">
        <span className="text-green-400 select-none">{PROMPT}</span>
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent text-white outline-none flex-1 ml-3"
        />
      </div>
    </div>
  );
};

export default Terminal;