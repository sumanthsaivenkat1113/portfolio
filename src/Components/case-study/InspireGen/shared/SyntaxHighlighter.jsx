import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function SyntaxHighlighterComponent({ 
  code, 
  copyButton = true, 
  onCopy 
}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    onCopy?.();
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-emerald-500/30 shadow-2xl">
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "2rem",
          paddingTop: "4.5rem", // Extra space for copy button + label
          fontSize: "1.15rem",     // Bigger, bolder text
          lineHeight: "1.8",
          fontWeight: "500",
          letterSpacing: "0.02em",
          borderRadius: "0.75rem",
          background: "#0d1117",
        }}
        showLineNumbers={false}
        wrapLongLines={true}
        codeTagProps={{
          style: {
            fontFamily: "ui-monospace, 'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Monaco, Consolas, 'Courier New', monospace",
          }
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>

      {/* Enhanced Copy Button */}
      {copyButton && (
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 flex items-center gap-2.5 px-5 py-2.5 bg-emerald-500/20 backdrop-blur-lg border border-emerald-400/40 text-emerald-300 rounded-xl text-sm font-semibold hover:bg-emerald-500/30 hover:border-emerald-300 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy Code
        </button>
      )}

      {/* Sleek "PROMPT" badge */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500/20 backdrop-blur border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-wider rounded-lg shadow-lg">
        PROMPT
      </div>
    </div>
  );
}