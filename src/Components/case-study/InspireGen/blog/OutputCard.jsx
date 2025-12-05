const highlightSyntax = (text) => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/(".*?")/g, '<span class="text-orange-300">$1</span>')
    .replace(/: ("[^"]*")/g, '<span class="text-gray-400">:</span> <span class="text-yellow-300">$1</span>')
    .replace(/: ({|}|null|false|true)/g, '<span class="text-gray-400">:</span> <span class="text-emerald-400">$1</span>')
    .replace(/(true|false|null)/g, '<span class="text-emerald-400">$1</span>')
    .replace(/({|}|\\[|\\]|,)/g, '<span class="text-gray-500">$1</span>');
};

export default function OutputCard({ content, copyText }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-emerald-500/20 shadow-2xl border border-emerald-500/10">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
            C. LLM Structured JSON Output
            <span className="text-sm font-normal text-teal-300 opacity-80">(Reliable & Ready-to-Render)</span>
          </h4>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">
            Live Output
          </span>
        </div>
        <pre className="text-sm md:text-base leading-relaxed text-cyan-300 font-mono overflow-x-auto">
          <code dangerouslySetInnerHTML={{ __html: highlightSyntax(content) }} />
        </pre>
        <button
          onClick={() => navigator.clipboard.writeText(copyText)}
          className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy JSON
        </button>
      </div>
    </div>
  );
}