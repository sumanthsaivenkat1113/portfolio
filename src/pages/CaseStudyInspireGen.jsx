import "../style/style.css";
import React, { useState, useEffect } from "react";
import {
    ArrowLeft,
    Sparkles,
    Image,
    Code,
    Copy,
    User,
    Zap,
    LayoutTemplate,
    Layers,
    ChevronRight,
    Pencil,
    PieChart,
    Megaphone,
    ClipboardCheck,
    Brain,
    Lock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


// Helper to format JSON for display
const formatJsonForDisplay = (jsonString) => {
    try {
        // Adding space for better readability of the JSON
        return JSON.stringify(JSON.parse(jsonString), null, 2);
    } catch (e) {
        return jsonString;
    }
};

// Typewriter component (kept as is)
const Typewriter = ({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    delay = 2000,
}) => {
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const fullText = texts[textIndex];
        let timer;

        if (isDeleting) {
            timer = setTimeout(() => {
                setCurrentText(fullText.substring(0, currentText.length - 1));
            }, deletingSpeed);

            if (currentText === "") {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        } else {
            timer = setTimeout(() => {
                setCurrentText(fullText.substring(0, currentText.length + 1));
            }, typingSpeed);

            if (currentText === fullText) {
                timer = setTimeout(() => setIsDeleting(true), delay);
            }
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delay]);

    // Changed the cursor color for better contrast
    return (
        <span className="font-mono">
            {currentText}
            <span className="animate-blink inline-block w-px h-5 ml-1 bg-indigo-500"></span>
        </span>
    );
};

// ArchitectureNode component (kept as is)
const ArchitectureNode = ({ icon: Icon, title, subtitle, className = "" }) => (
    <div className={`flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-gray-200 shadow-md ${className}`}>
        <div className="mb-3 p-3 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600">
            <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1 text-center">{subtitle}</p>}
    </div>
);

// FlowConnector component (kept as is)
const FlowConnector = ({ label }) => (
    <div className="flex flex-col items-center my-6">
        <div className="w-0.5 h-12 bg-gradient-to-b from-indigo-300 to-purple-400"></div>
        {label && (
            <span className="mt-2 text-xs font-semibold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full shadow-sm">
                {label}
            </span>
        )}
    </div>
);

// CodeDisplay component (enhanced styling and button)
const CodeDisplay = ({
    title,
    content,
    language,
    colorClass = "text-cyan-400",
    copyText,
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard
            .writeText(copyText || content)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch((err) => console.error("Copy failed:", err));
    };

    const isJson = language === "json";
    const bgClass = isJson ? "bg-gray-800" : "bg-gray-50 border border-gray-200";
    const contentClass = isJson ? colorClass : "text-gray-700";
    const displayContent = isJson ? formatJsonForDisplay(content) : content;

    return (
        <div className={`${bgClass} rounded-xl p-6 shadow-xl relative`}>
            <div className="flex justify-between items-start mb-4">
                <h4 className={`text-lg font-semibold ${isJson ? "text-white/90" : "text-gray-800"}`}>
                    {title}
                </h4>
                <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition ${copied ? "bg-emerald-600 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white"
                        } shadow-md`}
                >
                    {copied ? <ClipboardCheck size={18} /> : <Copy size={18} />}
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>

            <pre className={`text-xs font-mono overflow-x-auto ${contentClass} max-h-80 overflow-y-auto pt-2`}>
                <code>{displayContent}</code>
            </pre>
        </div>
    );
};

// --- DATA CONSTANTS ---
const blogTypewriterInputs = [
    "3 things to do in India",
    "How to master React hooks",
    "The history of quantum computing",
];
const generateBlogPrompt = (topic) => `You are an AI blog generator.
Generate a detailed blog about "${topic}" in JSON format.
Wrap your response strictly inside <json>...</json> tags.
<json>
{
  "Header": { "title": "A blog post about ${topic}" },
  "Introduction": { "introduction": "Write a short, engaging introduction." },
  "Content": [
    { "subheading": "Main point 1", "details": "Details for point 1" },
    { "subheading": "Main point 2", "details": "Details for point 2" },
    { "subheading": "Main point 3", "details": "Details for point 3" }
  ],
  "Conclusion": { "conclusion": "Wrap up the topic with final thoughts." }
}
</json>`;

const blogLLMOutput = `{
  "Header": {
    "title": "3 Unforgettable Experiences: A Journey Through India's Soul"
  },
  "Introduction": {
    "introduction": "India is not just a country; it's a vibrant tapestry of ancient cultures, breathtaking landscapes, and profound spirituality..."
  },
  "Content": [
    {
      "subheading": "1. Witness the Eternal Symbol of Love: The Taj Mahal",
      "details": "No trip to India is complete without standing before the majestic Taj Mahal in Agra..."
    },
    {
      "subheading": "2. Embark on a Spiritual Voyage on the Ganges in Varanasi",
      "details": "Varanasi, one of the oldest continuously inhabited cities in the world, is the spiritual heart of India..."
    },
    {
      "subheading": "3. Go on a Wildlife Safari in Ranthambore National Park",
      "details": "For a thrilling change of pace, head to Ranthambore in Rajasthan..."
    }
  ]
}`;

const presentationTypewriterInputs = [
    "AI is transforming the marketing industry. Make it only 5 slides",
    "Q3 financial performance review for executive team",
    "Launch plan for the new cloud platform",
];
const generatePresentationPrompt = (topic) => `
You are a professional presentation designer and content strategist.
Create a <b>complete, 8-12 slide corporate-style presentation</b> about "${topic}" in <b>strict JSON format</b> inside <json>...</json> tags.

<json>
{
  "TitleSlide": { "title": "${topic}", "subtitle": "An In-Depth Analysis" },
  "Agenda": ["Introduction", "Market Trends", "Key Insights", "Solutions", "Conclusion"],
  "Slides": [
    {
      "heading": "Introduction",
      "bullets": ["What is ${topic}?", "Why it matters in 2025", "Global impact stats"],
      "highlight": "1.2B people affected worldwide",
      "imageHint": "global map"
    },
    {
      "heading": "Current Challenges",
      "bullets": ["Challenge #1 with example", "Challenge #2 with data", "Rising costs: +35% YoY"],
      "highlight": null,
      "imageHint": "bar chart"
    }
  ],
  "Conclusion": ["${topic} is the future", "Act now to stay ahead", "Innovation drives success"],
  "CallToAction": "Start your ${topic} journey today – contact us!"
}
</json>`;
const presentationLLMOutput = `{
  "TitleSlide": {
    "title": "AI Transformation in Marketing",
    "subtitle": "Five Key Areas Where Artificial Intelligence is Revolutionizing Marketing Strategies"
  },
  "Agenda": [
    "The AI Marketing Revolution",
    "Hyper-Personalization at Scale",
    "Intelligent Content Creation"
  ],
  "Slides": [
    {
      "heading": "The AI Marketing Revolution: $107B Market by 2028",
      "bullets": [
        "AI marketing market growing at 29.8% CAGR to reach $107.5B by 2028"
      ],
      "highlight": "AI adoption in marketing grew 186% in 2023",
      "imageHint": "exponential growth chart showing AI marketing adoption curve"
    }
  ]
}`;

const posterTypewriterInputs = [
    "make a Horror movie poster",
    "create a recruitment ad for software engineers",
    "design a poster for a summer music festival",
];

const jsonText = `{JSON Schema$}`;
const generatePosterPrompt = (topic, category = "") => {
    const WORD_LIMITS = {
        MOVIE: { title: 5, tagline: 8, message: 12, cta: 7, desc: "dramatic, suspenseful, or blockbuster" },
        DEFAULT: { title: 6, tagline: 10, message: 15, cta: 10, desc: "creative, engaging, and general" },
    };
    const key = category.toUpperCase() || "DEFAULT";
    const limits = WORD_LIMITS[key] || WORD_LIMITS.DEFAULT;

    return `
You are an AI poster designer specializing in the <b>${key}</b> category.

Generate a creative and catchy poster content for "${topic}" in JSON format, with strict word limits:
* title: Max ${limits.title} words
* tagline: Max ${limits.tagline} words
* message: Max ${limits.message} words
* CallToAction.text: Max ${limits.cta} words

Tone: <b>${limits.desc}</b>.

Wrap the response exactly inside:
<json> ... </json>

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
</json>
`;
};
const posterLLMOutput = `{
  "Header": { 
    "title": "THE WHISPERING",
    "tagline": "Silence speaks louder than screams"
  },
  "MainText": {
    "message": "In a town where shadows breathe and reflections watch back, one family discovers their new home has been waiting for them..."
  },
  "CallToAction": {
    "text": "Coming to haunt you this Halloween"
  },
  "DesignHints": ["Use dripping blood-red typography", "High contrast black and white with splashes of crimson", "Distorted reflections in windows"]
}`;

// --- COMPONENT ---
export default function CaseStudyInspireGen() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Hero Section */}
            <section className="bg-gray-50 text-gray-900 py-24 md:py-32">
                <div className="max-w-3xl mx-auto px-6 text-center">

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                        InspireGen: Serverless AI
                        <span className="block text-2xl md:text-3xl font-light text-indigo-600 mt-3">
                            Structured Content Generation Engine
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                        Engineered a client-side solution for multi-modal content generation (Text & Image), leveraging <b>Prompt Engineering</b> and <b>parallel API execution</b> for sub-second latency.
                    </p>

                    {/* Call-to-action */}
                    <div className="mt-10 md:mt-12">
                        <a
                            href="#overview"
                            className="inline-flex items-center bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-md"
                        >
                            View Technical Deep Dive <ChevronRight className="ml-2" size={20} />
                        </a>
                    </div>
                </div>
            </section>

            


            {/* Project Overview */}
            <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-200 p-8 md:p-10"
                >
                    <motion.h2
                        className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        🚀 Project Overview
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        InspireGen is a schema-driven AI content engine that blends structured LLM output with
                        curated visual APIs to instantly generate polished blogs, presentations, and posters—fast,
                        reliable, and fully editable.
                    </motion.p>

                    {/* Animated Emoji Row — Bigger + Spread Across */}
                    <motion.div
                        className="grid grid-cols-4 mt-10 text-6xl w-full"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                    >
                        <motion.span
                            className="flex justify-center"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.8 }}
                        >
                            ✨
                        </motion.span>

                        <motion.span
                            className="flex justify-center"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.9 }}
                        >
                            🧠
                        </motion.span>

                        <motion.span
                            className="flex justify-center"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2.0 }}
                        >
                            ⚡
                        </motion.span>

                        <motion.span
                            className="flex justify-center"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2.1 }}
                        >
                            🖼️
                        </motion.span>
                    </motion.div>
                </motion.div>
            </section>

{/* What Users Can Do with InspireGen  */}




<section className="w-full py-16 md:py-24 bg-gray-50 bg-[repeating-linear-gradient(45deg,#f9fafb,#f9fafb 20px,#f3f4f6 20px,#f3f4f6 40px)]">
  <div className="max-w-5xl mx-auto px-6">

    {/* --- Section 1: What Users Can Do --- */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-900">
        What Users Can Do with InspireGen
      </h2>

      <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
        InspireGen enables users to generate structured, high-quality content effortlessly. Here’s how it helps users get maximum benefit:
      </p>

      <div className="space-y-4 text-left text-gray-700 text-lg md:text-xl">
        {[
          { icon: "💡", title: "Generate Blogs", desc: "Create structured, multi-topic blog articles instantly." },
          { icon: "📊", title: "Build Presentations", desc: "Auto-generate corporate-style slide decks with visual and textual content." },
          { icon: "🎨", title: "Design Posters", desc: "Produce creative, multi-modal poster content with design hints included." },
          { icon: "📝", title: "Use Templates", desc: "Leverage pre-designed templates for consistent formatting and rapid content creation." },
          { icon: "✏️", title: "Preview & Edit", desc: "Review AI-generated content and make real-time edits before publishing." },
          { icon: "🤖", title: "AI Study Assistant (Coming Soon)", desc: "Ask questions and get structured answers instantly." },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="group relative p-6 rounded-lg cursor-pointer hover:bg-indigo-50 transition w-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 rounded-l-lg opacity-0 group-hover:opacity-100 transition-all"></div>
            <p className="text-lg relative z-10 flex items-start gap-3">
              <span className="text-2xl">{item.icon}</span>
              <span>
                <b>{item.title}:</b> {item.desc}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* --- Section 2: Why I Built This --- */}
    <div className="text-center">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-900">
        Why I Built InspireGen
      </h2>

      <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
        InspireGen was built to simplify content creation and help users focus on ideas while the platform handles structure, design, and consistency.
      </p>

      <div className="space-y-4 text-left text-gray-700 text-lg md:text-xl">
        {[
          { icon: "⚡", title: "Instant Content Generation", desc: "Create blogs, presentations, and posters in seconds." },
          { icon: "📊", title: "Structured & Predictable Output", desc: "Save time with AI content that follows a strict JSON schema." },
          { icon: "🎨", title: "Consistency Across Media", desc: "Ensure text and visuals align perfectly without manual edits." },
          { icon: "🛠️", title: "Real-time Customization", desc: "Edit AI-generated content instantly to match your needs." },
          { icon: "🚀", title: "Accelerated Workflow", desc: "Combine multiple AI services in one platform for faster delivery." },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="group relative p-6 rounded-lg cursor-pointer hover:bg-indigo-50 transition w-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 rounded-l-lg opacity-0 group-hover:opacity-100 transition-all"></div>
            <p className="text-lg relative z-10 flex items-start gap-3">
              <span className="text-2xl">{item.icon}</span>
              <span>
                <b>{item.title}:</b> {item.desc}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>

  </div>
</section>





            <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
                {/* <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-medium transition"
                >
                    <ArrowLeft size={18} /> Back to Projects
                </Link> */}

                <section id="overview" className="pt-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900">
                        Challenges & Technical Learnings
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                        {/* Challenges */}
                        <div className="bg-white rounded-3xl shadow-xl border border-red-100 p-10 md:p-12">
                            <h3 className="text-3xl font-bold mb-6 text-red-700">Key Challenges</h3>
                            <ul className="space-y-5 text-gray-700 text-lg leading-relaxed list-disc list-inside">
                                <li>JSON Instability</li>
                                <li>API Variations</li>
                                <li>Template Mismatch</li>
                                <li>Key Inconsistency</li>
                                <li>Auth Handling</li>
                            </ul>
                        </div>

                        {/* Technical Learnings */}
                        <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-10 md:p-12">
                            <h3 className="text-3xl font-bold mb-6 text-emerald-700">Technical Learnings</h3>
                            <ul className="space-y-5 text-gray-700 text-lg leading-relaxed list-disc list-inside">
                                <li>Schema Prompts</li>
                                <li>Unified Wrappers</li>
                                <li>Modular Templates</li>
                                <li>Editable Blocks</li>
                                <li>Output Control</li>
                            </ul>
                        </div>

                    </div>
                </section>

                <hr className="my-16 border-t border-gray-200" />

                {/* Multi-Format Generation */}
                <section id="multi-format" className="pt-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
                        Technical Execution: Content by Design
                    </h2>
                    <p className="text-xl text-gray-700 text-center mb-20 max-w-4xl mx-auto">
                        A dedicated <b>Prompt Engineering Function</b> creates a unique, self-describing <b>JSON Schema</b> for each content type, guaranteeing predictable output for frontend consumption.
                    </p>

                    <div className="space-y-24">
                        {/* Blog Article Generation */}
                        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-indigo-100">
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-indigo-200">
                                <Pencil size={36} className="text-indigo-600" />
                                <h3 className="text-3xl font-bold text-gray-900">1. Blog Article Generation</h3>
                            </div>

                            <div className="space-y-10">
                                <div className="border border-indigo-300 p-6 rounded-xl bg-indigo-50 shadow-md">
                                    <h4 className="text-lg font-semibold mb-2 text-indigo-800">A. User Input Simulation</h4>
                                    <div className="p-2 rounded-lg text-xl font-mono text-indigo-900 font-bold bg-white/50 min-h-[40px] flex items-center">
                                        <Typewriter texts={blogTypewriterInputs} typingSpeed={70} deletingSpeed={30} delay={2500} />
                                    </div>
                                </div>
                                <div className="flex justify-center"><ChevronRight size={24} className="text-indigo-400" /></div>

                                <CodeDisplay
                                    title="B. Prompt Engineering (The Contract Function)"
                                    content={generateBlogPrompt("${topic}")}
                                    language="javascript"
                                    copyText={generateBlogPrompt("The specified topic")}
                                />
                                <div className="flex justify-center"><ChevronRight size={24} className="text-indigo-400" /></div>

                                <CodeDisplay
                                    title="C. LLM Structured JSON Output (Reliable Data)"
                                    content={blogLLMOutput}
                                    language="json"
                                    colorClass="text-cyan-400"
                                    copyText={blogLLMOutput}
                                />
                            </div>
                        </div>

                        {/* Corporate Presentation Generation */}
                        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-purple-100">
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-purple-200">
                                <PieChart size={36} className="text-purple-600" />
                                <h3 className="text-3xl font-bold text-gray-900">2. Corporate Presentation Generation</h3>
                            </div>

                            <div className="space-y-10">
                                <div className="border border-purple-300 p-6 rounded-xl bg-purple-50 shadow-md">
                                    <h4 className="text-lg font-semibold mb-2 text-purple-800">A. User Input Simulation</h4>
                                    <div className="p-2 rounded-lg text-xl font-mono text-purple-900 font-bold bg-white/50 min-h-[40px] flex items-center">
                                        <Typewriter texts={presentationTypewriterInputs} typingSpeed={70} deletingSpeed={30} delay={2500} />
                                    </div>
                                </div>
                                <div className="flex justify-center"><ChevronRight size={24} className="text-purple-400" /></div>

                                <CodeDisplay
                                    title="B. Prompt Engineering (The Contract Function)"
                                    content={generatePresentationPrompt("AI in Marketing")}
                                    language="javascript"
                                    copyText={generatePresentationPrompt("AI in Marketing")}
                                />
                                <div className="flex justify-center"><ChevronRight size={24} className="text-purple-400" /></div>

                                <CodeDisplay
                                    title="C. LLM Structured JSON Output (Reliable Data)"
                                    content={presentationLLMOutput}
                                    language="json"
                                    colorClass="text-cyan-400"
                                    copyText={presentationLLMOutput}
                                />
                            </div>
                        </div>

                        {/* Multi-Modal Poster Generation */}
                        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-emerald-100">
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-emerald-200">
                                <Megaphone size={36} className="text-emerald-600" />
                                <h3 className="text-3xl font-bold text-gray-900">3. Multi-Modal Poster Generation</h3>
                            </div>

                            <div className="space-y-10">
                                <div className="border border-emerald-300 p-6 rounded-xl bg-emerald-50 shadow-md">
                                    <h4 className="text-lg font-semibold mb-2 text-emerald-800">A. User Input Simulation</h4>
                                    <div className="p-2 rounded-lg text-xl font-mono text-emerald-900 font-bold bg-white/50 min-h-[40px] flex items-center">
                                        <Typewriter texts={posterTypewriterInputs} typingSpeed={70} deletingSpeed={30} delay={2500} />
                                    </div>
                                </div>
                                <div className="flex justify-center"><ChevronRight size={24} className="text-emerald-400" /></div>

                                <CodeDisplay
                                    title="B. Prompt Engineering (The Contract Function with Constraints)"
                                    content={generatePosterPrompt("Horror movie", "MOVIE")}
                                    language="javascript"
                                    copyText={generatePosterPrompt("Horror movie", "MOVIE")}
                                />
                                <div className="flex justify-center"><ChevronRight size={24} className="text-emerald-400" /></div>

                                <CodeDisplay
                                    title="C. LLM Structured JSON Output (Design Hints Included)"
                                    content={posterLLMOutput}
                                    language="json"
                                    colorClass="text-cyan-400"
                                    copyText={posterLLMOutput}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="my-16 border-t border-gray-200" />

                {/* Workflow */}
                <section>
                    <h2 className="text-4xl font-extrabold text-center mb-16">Workflow</h2>
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12">
                        <div className="space-y-16 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: User,
                                    title: "1. User Input",
                                    desc: "User provides a prompt (e.g., 'design a summer music festival poster').",
                                },
                                {
                                    icon: Zap,
                                    title: "2. Parallel API Calls",
                                    desc: "The app simultaneously calls the <b>LLM API</b> (for content/hints) and <b>Image API</b> (for visuals).",
                                },
                                {
                                    icon: Layers,
                                    title: "3. Data Merge",
                                    desc: "The LLM's structured JSON and Image URL are merged into a single data object.",
                                },
                                {
                                    icon: LayoutTemplate,
                                    title: "4. Template Render",
                                    desc: "React renders the final product using the unified, predictable data.",
                                },
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col md:flex-row items-start gap-8 border-b border-gray-100 pb-8 last:border-b-0 last:pb-0"
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-xl flex-shrink-0">
                                        <step.icon size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: step.desc }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <hr className="my-16 border-t border-gray-200" />

                {/* System Architecture */}
                <section className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12">
                    <h2 className="text-4xl font-extrabold text-center mb-16">System Architecture Diagram</h2>

                    <div className="max-w-4xl mx-auto">
                        <ArchitectureNode
                            icon={User}
                            title="1. Client Frontend (React/TS)"
                            subtitle="User Input → Prompt Function → Promise.all()"
                        />
                        <FlowConnector label="Concurrent Secure Calls" />
                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <ArchitectureNode
                                    icon={Brain}
                                    title="2. LLM Provider (Hugging Face LLAMA API)"
                                    subtitle="Outputs strict JSON payload"
                                />
                                <p className="text-center text-sm text-gray-500 mt-4 font-mono">
                                    {jsonText}
                                </p>
                            </div>
                            <div>
                                <ArchitectureNode
                                    icon={Image}
                                    title="3. Image API (Pexels/Unsplash/Pixabay)"
                                    subtitle="Returns image URLs based on imageHint"
                                />
                                <p className="text-center text-sm text-gray-500 mt-4 font-mono">
                                    [URL, URL, ...]
                                </p>
                            </div>
                        </div>
                        <FlowConnector label="Merge Response Data" />
                        <ArchitectureNode
                            icon={LayoutTemplate}
                            title="4. Template Rendering"
                            subtitle="Final component render using unified, predictable data"
                            className="bg-emerald-50 border-emerald-200 shadow-xl"
                        />
                    </div>
                </section>

                <hr className="my-16 border-t border-gray-200" />

                {/* Core Technical Stack */}
                <section>
                    <h2 className="text-4xl font-extrabold text-center mb-16">Core Technical Stack</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Code,
                                name: "React.js",
                                desc: "Front-end UI framework for component rendering.",
                            },
                            {
                                icon: Brain,
                                name: "LLM API",
                                desc: "Generative model for structured text content (JSON).",
                            },
                            {
                                icon: Image,
                                name: "Image API",
                                desc: "Third-party APIs for fetching relevant visual assets.",
                            },
                            {
                                icon: Lock,
                                name: "Google Auth",
                                desc: "Authentication layer for user management and secure access.",
                            },
                        ].map((tech, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-[1.03] transition duration-300"
                            >
                                <tech.icon size={48} className="text-indigo-600 mx-auto mb-3" />
                                <p className="font-bold text-gray-900">{tech.name}</p>
                                <p className="text-xs text-gray-500 mt-1 h-8 flex items-center justify-center">
                                    {tech.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
