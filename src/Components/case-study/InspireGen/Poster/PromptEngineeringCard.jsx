import React from "react";
import SyntaxHighlighter from "../shared/SyntaxHighlighter";

const generatePosterPrompt = (topic, category = "") => {
  const WORD_LIMITS = {
    MOVIE: { title: 5, tagline: 8, message: 12, cta: 7, desc: "dramatic, suspenseful, terrifying, and cinematic" },
    DEFAULT: { title: 6, tagline: 10, message: 15, cta: 10, desc: "bold, creative, engaging, and visually striking" },
  };
  const key = category.toUpperCase() || "DEFAULT";
  const limits = WORD_LIMITS[key] || WORD_LIMITS.DEFAULT;

  return `You are an AI poster designer specializing in the ${key} category.

Generate a creative and catchy poster content for "${topic}" in JSON format, with strict word limits:
• title: Max ${limits.title} words
• tagline: Max ${limits.tagline} words
• message: Max ${limits.message} words
• CallToAction.text: Max ${limits.cta} words

Tone: ${limits.desc}.

Wrap the response exactly inside <json>...</json> tags.

<json>
{
  "Header": { 
    "title": "A short title",
    "tagline": "A catchy tagline"
  },
  "MainText": {
    "message": "Main message"
  },
  "CallToAction": {
    "text": "Action line"
  },
  "DesignHints": ["Use bold typography", "High contrast colors"]
}
</json>`;
};

const examplePrompt = generatePosterPrompt("make a Horror movie poster", "MOVIE");

export default function PromptEngineeringCard() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-emerald-500/30 shadow-2xl border border-emerald-500/10">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
            B. Prompt Engineering
            <span className="text-sm font-normal text-emerald-300 opacity-80">
              (Smart Constraints + Tone Control)
            </span>
          </h4>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium">
            System Prompt
          </span>
        </div>
        <SyntaxHighlighter code={examplePrompt} />
      </div>
    </div>
  );
}









