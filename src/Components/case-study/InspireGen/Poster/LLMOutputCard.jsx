import React from "react";
import SyntaxHighlighter from "../shared/SyntaxHighlighter";

const posterLLMOutput = `{
  "Header": { 
    "title": "THE WHISPERING",
    "tagline": "Silence speaks louder than screams"
  },
  "MainText": {
    "message": "In a town where shadows breathe and reflections watch back, one family discovers their new home has been waiting for them... for decades."
  },
  "CallToAction": {
    "text": "Coming to haunt you this Halloween"
  },
  "DesignHints": [
    "Dripping blood-red typography for title",
    "High contrast black background with crimson fog",
    "Distorted reflection of a screaming face in a cracked window",
    "Faint ghostly hands reaching from walls",
    "Subtle flickering candlelight effect",
    "Cracked vintage photo frame aesthetic"
  ]
}`;

export default function LLMOutputCard() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-emerald-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-emerald-500/20 shadow-2xl border border-emerald-500/10">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/60"></span>
            C. LLM Structured JSON Output
            <span className="text-sm font-normal text-emerald-300 opacity-80">
              (Ready for Image Generation)
            </span>
          </h4>
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium border border-red-500/30">
            Live Horror Output
          </span>
        </div>
        <SyntaxHighlighter
          code={posterLLMOutput}
          copyButton={true}
          onCopy={() => alert?.("JSON copied!")} // optional toast
        />
      </div>
    </div>
  );
}