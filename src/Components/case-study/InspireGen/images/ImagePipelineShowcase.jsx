// src/components/case-study/image-pipeline/ImagePipelineShowcase.jsx
import React, { useState, useEffect } from "react";
import Typewriter from "../shared/Typewriter";
// import OutputCard from "../presentation/OutputCard"; // <-- your JSON output card component
import OutputCard from "../blog/OutputCard"; // <-- your JSON output card component
import { ArrowRight, Search, FileJson } from "lucide-react";

export default function ImagePipelineShowcase() {
  const userText = "5 things to do in India";
  const extractedKeyword = "India";

  const jsonOutput = `
{
  "keyword": "India",
  "image": {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4",
      "full": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?fm=jpg&q=80",
      "regular": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?fit=crop&w=1080&q=80",
      "small": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=400&fit=max",
      "thumb": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=200&fit=max"
    }
  }
}
`;

  // Simulated Reveal Timings
  const [showKeyword, setShowKeyword] = useState(false);
  const [showJSON, setShowJSON] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowKeyword(true), 2800); // after user types
    setTimeout(() => setShowJSON(true), 3800); // after keyword appears
  }, []);

  return (
    <div className="space-y-16">

      {/* ---------------------- A. USER INPUT TERMINAL ---------------------- */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
        <div className="relative bg-gradient-to-br from-gray-900 to-black/95 backdrop-blur-2xl rounded-2xl p-8 ring-1 ring-purple-500/30 shadow-2xl border border-purple-500/20">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="inline-block w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
              A. User Input
            </h4>
            <span className="px-4 py-1.5 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full">
              Live Typing
            </span>
          </div>

          {/* Terminal */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-xl blur-xl" />
            <div className="relative bg-black/60 backdrop-blur-xl rounded-xl p-6 border border-purple-500/30 shadow-2xl">

              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-500 text-sm font-medium">user@terminal:~$</span>
              </div>

              <div className="font-mono text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-gradient-x">
                <Typewriter texts={[userText]} typingSpeed={80} deletingSpeed={0} delay={2000} loop={false} />
                <span className="inline-block w-1 h-8 ml-1 bg-gradient-to-b from-purple-400 to-pink-500 animate-blink" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------- B. KEYWORD EXTRACTION ---------------------- */}
      <div className={`transition-all duration-700 ${showKeyword ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
          <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-cyan-500/30 shadow-2xl border border-cyan-500/20">

            <div className="flex items-center justify-between mb-6">
              <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                <Search className="text-cyan-400 w-6 h-6" />
                B. Keyword Extraction
              </h4>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium">
                Smart NLP
              </span>
            </div>

            <div className="p-6 bg-black/40 rounded-xl border border-cyan-500/20 font-mono text-lg text-gray-300">
              The system extracted keyword:
              <span className="ml-3 px-3 py-1.5 rounded-lg bg-cyan-600/20 text-cyan-300 font-bold tracking-wide border border-cyan-500/30">
                {extractedKeyword}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------- C. IMAGE JSON OUTPUT ---------------------- */}
      <div className={`transition-all duration-700 ${showJSON ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <OutputCard content={jsonOutput} />
      </div>
    </div>
  );
}
