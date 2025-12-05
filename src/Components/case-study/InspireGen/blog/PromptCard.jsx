import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function PromptCard({ 
  title, 
  subtitle, 
  badge = "System Prompt", 
  content, 
  copyText = content  // fallback to content if not provided
}) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(copyText);
    // optional: add a tiny "Copied!" flash here if you want
  };

  return (
    <div className="relative group">
      {/* Gradient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
      
      <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-indigo-500/30 shadow-2xl border border-indigo-500/10 overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-7">
          <h4 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
            {title}
            {subtitle && (
              <span className="text-sm font-normal text-indigo-300 opacity-80 ml-2">
                {subtitle}
              </span>
            )}
          </h4>
          <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
            {badge}
          </span>
        </div>

        {/* Beautiful Syntax Highlighting */}
        <div className="relative rounded-xl overflow-hidden border border-indigo-500/20">
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "2rem 2rem 2rem 2rem",
              paddingTop: "4rem",     // space for badge + button
              fontSize: "1.1rem",
              lineHeight: "1.85",
              background: "#0d1117",
            }}
            codeTagProps={{
              style: {
                fontFamily: "ui-monospace, 'JetBrains Mono', Menlo, Monaco, Consolas, monospace",
              },
            }}
            wrapLongLines
          >
            {content.trim()}
          </SyntaxHighlighter>

          {/* Top-left badge */}
          <div className="absolute top-3 left-4 px-3 py-1 bg-indigo-500/20 backdrop-blur border border-indigo-400/40 text-indigo-300 text-xs font-bold tracking-wider rounded-lg">
            {badge.toUpperCase()}
          </div>

          {/* Copy button – now perfectly positioned and never overlaps text */}
          <button
            onClick={handleCopy}
            className="absolute top-3 right-4 flex items-center gap-2.5 px-5 py-2.5 bg-indigo-500/20 backdrop-blur-md border border-indigo-400/40 text-indigo-300 rounded-xl text-sm font-semibold hover:bg-indigo-500/30 hover:border-indigo-300 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}










