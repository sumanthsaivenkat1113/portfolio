import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function OutputCard({ content, copyText = content }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
      <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-emerald-500/30 shadow-2xl border border-emerald-500/10">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            C. LLM Structured JSON Output
            <span className="text-sm font-normal text-cyan-300 opacity-80 ml-2">
              (Ready for PowerPoint/Render)
            </span>
          </h4>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium uppercase tracking-wider">
            Live Output
          </span>
        </div>
        <div className="rounded-xl overflow-hidden border border-emerald-500/20 shadow-inner">
          <SyntaxHighlighter
            language="json"
            style={tomorrow}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              fontSize: "0.95rem",
              background: "#0f172a", 
              lineHeight: "1.6",
            }}
            showLineNumbers={false}
            wrapLongLines={true}
            codeTagProps={{
              style: { fontFamily: "ui-monospace, 'Fira Code', 'JetBrains Mono', monospace" },
            }}
          >
            {content.trim()}
          </SyntaxHighlighter>
        </div>
        <button
          onClick={handleCopy}
          className={`absolute top-6 right-6 flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg text-white ${
            copied
              ? "bg-emerald-600 animate-pulse"
              : "bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700"
          }`}
        >
          {copied ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy JSON
            </>
          )}
        </button>
      </div>
    </div>
  );
}