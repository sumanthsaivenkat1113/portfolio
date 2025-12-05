// src/components/shared/CodeDisplay.jsx
import React, { useState } from "react";
import { Copy, ClipboardCheck } from "lucide-react";

const formatJsonForDisplay = (jsonString) => {
  try {
    return JSON.stringify(JSON.parse(jsonString), null, 2);
  } catch {
    return jsonString;
  }
};

export default function CodeDisplay({
  title,
  content,
  language = "text",
  colorClass = "text-cyan-400",
  copyText,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText || content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const isJson = language === "json";
  const bgClass = isJson ? "bg-gray-800" : "bg-gray-50 border border-gray-200";
  const textColor = isJson ? colorClass : "text-gray-700";
  const displayContent = isJson ? formatJsonForDisplay(content) : content;

  return (
    <div className={`${bgClass} rounded-xl p-6 shadow-xl relative overflow-hidden`}>
      <div className="flex justify-between items-start mb-4">
        <h4 className={`text-lg font-semibold ${isJson ? "text-white/90" : "text-gray-800"}`}>
          {title}
        </h4>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all transform hover:scale-105 ${
            copied
              ? "bg-emerald-600 text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          } shadow-md`}
        >
          {copied ? <ClipboardCheck size={18} /> : <Copy size={18} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre className={`text-xs font-mono overflow-x-auto max-h-80 overflow-y-auto pt-2 ${textColor}`}>
        <code>{displayContent}</code>
      </pre>
    </div>
  );
}