
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"; // Clean dark theme

export default function PromptCard({
  title,
  subtitle,
  badge = "System Prompt",
  content,
  copyText = content,
  language = "json", // You can change to "javascript", "python", etc.
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative group">
      {/* Gradient Glow Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />

      {/* Main Card */}
      <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-purple-500/30 shadow-2xl border border-purple-500/10">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
            {title}
            {subtitle && (
              <span className="text-sm font-normal text-purple-300 opacity-80 ml-2">
                {subtitle}
              </span>
            )}
          </h4>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium uppercase tracking-wider">
            {badge}
          </span>
        </div>

        {/* Syntax Highlighted Code Block */}
        <div className="rounded-xl overflow-hidden border border-purple-500/20 shadow-inner">
          <SyntaxHighlighter
            language={language}
            style={tomorrow}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              fontSize: "0.95rem",
              background: "#0d0d0d",
              borderRadius: "0.75rem",
            }}
            showLineNumbers={false}
            wrapLongLines={true}
          >
            {content.trim()}
          </SyntaxHighlighter>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`absolute top-6 right-6 flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg ${
            copied
              ? "bg-emerald-500 text-white"
              : "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
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
              Copy Prompt
            </>
          )}
        </button>
      </div>
    </div>
  );
}