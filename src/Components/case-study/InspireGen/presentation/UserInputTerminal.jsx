// src/components/case-study/presentation/UserInputTerminal.jsx
import React from "react";
import Typewriter from "../shared/Typewriter";

const inputs = [
  "AI is transforming the marketing industry. Make it only 5 slides",
  "Q3 financial performance review for executive team",
  "Launch plan for the new cloud platform",
];

export default function UserInputTerminal() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
      <div className="relative bg-gradient-to-br from-gray-900 to-black/95 backdrop-blur-2xl rounded-2xl p-8 ring-1 ring-purple-500/30 shadow-2xl border border-purple-500/20">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="inline-block w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg shadow-purple-500/50" />
            A. User Input Simulation
          </h4>
          <span className="px-4 py-1.5 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full backdrop-blur border border-purple-500/30">
            Live Typing
          </span>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-xl blur-xl" />
          <div className="relative bg-black/60 backdrop-blur-xl rounded-xl p-6 border border-purple-500/30 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-gray-500 text-sm font-medium">presentation@terminal:~$</span>
            </div>

            <div className="font-mono text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-gradient-x">
              <Typewriter texts={inputs} typingSpeed={80} deletingSpeed={40} delay={2800} />
              <span className="inline-block w-1 h-8 ml-1 bg-gradient-to-b from-purple-400 to-pink-500 animate-blink" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}