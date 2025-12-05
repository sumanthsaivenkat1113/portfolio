// // src/components/case-study/images/ImageFlowCard.jsx
// import React from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// const imageFlowExample = `
// // Common Image Fetch Logic (from all generators)
// async function fetchImages(provider, keywords) {
//   return Promise.all(
//     keywords.map(async (kw) => {
//       return await fetchImageByProvider(provider, kw);
//     })
//   );
// }

// // Blog Example
// const mainImage = await fetchImageByProvider(provider, topic); // Header
// const contentImages = await fetchImages(provider, sections.map(s => s.subheading));

// // Poster Example
// const keyword = title || message.split(' ')[0] || topic;
// const posterImage = await fetchImageByProvider(provider, keyword);

// // Presentation Example
// const slideImages = await fetchImages(provider, slides.map(s => s.imageHint || s.heading));
// `;

// export default function ImageFlowCard() {
//   const [displayedText, setDisplayedText] = React.useState("");
//   const [isTyping, setIsTyping] = React.useState(true);
//   const fullText = imageFlowExample.trim();

//   React.useEffect(() => {
//     setDisplayedText("");
//     setIsTyping(true);

//     const timer = setTimeout(() => {
//       let i = 0;
//       const interval = setInterval(() => {
//         if (i < fullText.length) {
//           setDisplayedText(prev => prev + fullText[i]);
//           i++;
//         } else {
//           setIsTyping(false);
//           clearInterval(interval);
//         }
//       }, 18); // Slightly slower for drama

//       return () => clearInterval(interval);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative group">
//       {/* Epic Gradient Glow */}
//       <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-70 group-hover:blur-md transition-all duration-1000" />

//       <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-cyan-500/30 shadow-2xl border border-cyan-500/10 overflow-hidden">

//         {/* Header with Pulse */}
//         <div className="flex justify-between items-center mb-7">
//           <h4 className="text-2xl font-bold text-white flex items-center gap-3">
//             <span className="inline-block w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
//             D. Image Generation Pipeline
//             <span className="text-sm font-normal text-cyan-300 opacity-80">
//               (Keyword Extraction → Stock API → Attached URLs)
//             </span>
//           </h4>
//           <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium uppercase tracking-wide">
//             Visual Assets Flow
//           </span>
//         </div>

//         {/* Syntax Highlighter with Typewriter Magic */}
//         <div className="relative rounded-xl overflow-hidden border border-cyan-500/20 shadow-inner">
//           <SyntaxHighlighter
//             language="javascript"
//             style={vscDarkPlus}
//             customStyle={{
//               margin: 0,
//               padding: "2rem",
//               paddingTop: "4.5rem",
//               fontSize: "1.15rem",
//               lineHeight: "1.9",
//               background: "#0d1117",
//               borderRadius: "0.75rem",
//             }}
//             codeTagProps={{
//               style: {
//                 fontFamily: "ui-monospace, 'JetBrains Mono', Menlo, monospace",
//               },
//             }}
//             wrapLongLines
//           >
//             {displayedText}
//             {isTyping && (
//               <span className="inline-block w-2 h-6 bg-gradient-to-b from-cyan-400 to-pink-400 rounded-sm ml-1 animate-pulse shadow-lg shadow-cyan-400/50" />
//             )}
//           </SyntaxHighlighter>

//           {/* Glowing Badge */}
//           <div className="absolute top-3 left-4 px-3 py-1 bg-cyan-500/20 backdrop-blur border border-cyan-400/40 text-cyan-300 text-xs font-bold tracking-wider rounded-lg shadow-md">
//             CORE LOGIC
//           </div>

//           {/* Enhanced Copy Button */}
//           <button
//             onClick={() => navigator.clipboard.writeText(imageFlowExample)}
//             className="absolute top-3 right-4 flex items-center gap-2.5 px-5 py-2.5 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-cyan-300 rounded-xl text-sm font-semibold hover:bg-cyan-500/30 hover:border-cyan-300 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl group-hover:shadow-cyan-400/30"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
//             </svg>
//             Copy Snippet
//           </button>
//         </div>

//         {/* Awesome Comparison Table */}
//         <div className="mt-8 overflow-x-auto">
//           <table className="w-full text-sm text-gray-300 border-collapse">
//             <thead>
//               <tr className="bg-gray-800/50">
//                 <th className="p-3 text-left font-bold text-cyan-300 border-b border-cyan-500/20">Generator</th>
//                 <th className="p-3 text-left font-bold text-cyan-300 border-b border-cyan-500/20">Keyword Source</th>
//                 <th className="p-3 text-left font-bold text-cyan-300 border-b border-cyan-500/20">Fetch Method</th>
//                 <th className="p-3 text-left font-bold text-cyan-300 border-b border-cyan-500/20">Provider (Default)</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="hover:bg-gray-800/30 transition-colors">
//                 <td className="p-3 border-b border-gray-700/50">Blog</td>
//                 <td className="p-3 border-b border-gray-700/50">Topic (header) + Subheading (sections)</td>
//                 <td className="p-3 border-b border-gray-700/50">Promise.all for sections</td>
//                 <td className="p-3 border-b border-gray-700/50">Unsplash</td>
//               </tr>
//               <tr className="hover:bg-gray-800/30 transition-colors">
//                 <td className="p-3 border-b border-gray-700/50">Poster</td>
//                 <td className="p-3 border-b border-gray-700/50">Title / First word of message / Topic</td>
//                 <td className="p-3 border-b border-gray-700/50">Single fetch</td>
//                 <td className="p-3 border-b border-gray-700/50">Unsplash</td>
//               </tr>
//               <tr className="hover:bg-gray-800/30 transition-colors">
//                 <td className="p-3">Presentation</td>
//                 <td className="p-3">ImageHint / Heading</td>
//                 <td className="p-3">Promise.all for slides</td>
//                 <td className="p-3">sessionStorage / Unsplash</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Visual Flow Diagram – Even More Awesome! */}
//         <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400 flex-wrap">
//           <div className="flex flex-col items-center min-w-[80px]">
//             <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400/40 rounded-xl flex items-center justify-center mb-2 shadow-md">
//               <span className="text-xl">📝</span>
//             </div>
//             <span className="text-center">AI Text Gen</span>
//           </div>
//           <div className="text-2xl text-cyan-400">→</div>
//           <div className="flex flex-col items-center min-w-[80px]">
//             <div className="w-12 h-12 bg-purple-500/20 border border-purple-400/40 rounded-xl flex items-center justify-center mb-2 shadow-md">
//               <span className="text-xl">🔑</span>
//             </div>
//             <span className="text-center">Extract Keywords</span>
//           </div>
//           <div className="text-2xl text-cyan-400">→</div>
//           <div className="flex flex-col items-center min-w-[80px]">
//             <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-400/40 rounded-xl flex items-center justify-center mb-2 shadow-md">
//               <span className="text-xl">🌐</span>
//             </div>
//             <span className="text-center">Stock API Call</span>
//           </div>
//           <div className="text-2xl text-cyan-400">→</div>
//           <div className="flex flex-col items-center min-w-[80px]">
//             <div className="w-12 h-12 bg-pink-500/20 border border-pink-400/40 rounded-xl flex items-center justify-center mb-2 shadow-md">
//               <span className="text-xl">🖼️</span>
//             </div>
//             <span className="text-center">Attach URLs</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// src/components/case-study/images/ImageGenerationMasterCardMinimal.jsx
import React from "react";
import { Sparkles, Cpu, FileJson, Image as ImageIcon } from "lucide-react";
import ImagePipelineShowcase from "./ImagePipelineShowcase";

export default function ImageGenerationCard() {
    const steps = [
        {
            number: "01",
            title: "User Input",
            desc: "The user enters any descriptive text such as '5 things to do in India'",
            icon: Sparkles,
            color: "text-purple-500",
            bg: "bg-purple-50"
        },
        {
            number: "02",
            title: "Keyword Extraction",
            desc: "AI extracts the most meaningful search keyword (e.g., 'India')",
            icon: Cpu,
            color: "text-cyan-500",
            bg: "bg-cyan-50"
        },
        {
            number: "03",
            title: "Image Source Mapping",
            desc: "Keyword is routed to providers like Unsplash, Pexels or Pixabay",
            icon: ImageIcon,
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            number: "04",
            title: "JSON Result Output",
            desc: "The system generates a clean JSON with all matched image URLs",
            icon: FileJson,
            color: "text-orange-500",
            bg: "bg-orange-50"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto p-8 space-y-12">

            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-gray-900">
                    Image Generation Workflow
                </h1>
                <p className="text-gray-600 text-lg">
                    A clean 4-step pipeline from user text → keyword → images → JSON.
                </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-start p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className={`p-4 rounded-full ${step.bg} mb-4`}>
                            <step.icon className={`w-6 h-6 ${step.color}`} />
                        </div>

                        <span className="text-gray-400 font-bold mb-1">{step.number}</span>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {step.title}
                        </h3>

                        <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                ))}
            </div>

            {/* Final Tagline */}
            <div className="text-center mt-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300">
                    End-to-end Image Generation Pipeline
                </div>
            </div>
            <ImagePipelineShowcase />
        </div>
    );
}
