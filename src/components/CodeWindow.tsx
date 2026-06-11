'use client';

import { Highlight, themes } from 'prism-react-renderer';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import { motion } from 'framer-motion';

type CodeWindowProps = {
  title: string;
  language: string;
  code: string;
};

export function CodeWindow({ title, language, code }: CodeWindowProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-8 overflow-hidden rounded-xl border border-line bg-[#0d1117] shadow-2xl"
    >
      {/* Mac-like Window Header */}
      <div className="flex items-center justify-between border-b border-line/50 bg-[#161b22] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="ml-2 font-mono text-xs text-[#8b949e]">{title}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-xs text-[#8b949e] transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Copy code"
        >
          {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto p-4 text-sm">
        <Highlight theme={themes.github} code={code} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} font-mono`} style={{ ...style, backgroundColor: 'transparent' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="table-row">
                  <span className="table-cell select-none pr-4 text-right text-[#484f58]">
                    {i + 1}
                  </span>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </motion.div>
  );
}
