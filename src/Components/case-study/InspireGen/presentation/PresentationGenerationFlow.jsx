import presentationVideo from "../../../../assets/videos/presentation/presentationVideo.mp4"
import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Workflow,
  Code2,
  FileJson,
  ImageIcon,
  Layers,
  Video,
  Presentation,
  ArrowRight,
  Sparkles
} from "lucide-react";

const PromptEngineering = `
You are a professional presentation designer and content strategist.
Create a **complete, 8-12 slide corporate-style presentation** about "\${topic}" in **strict JSON format** inside <json>...</json> tags.
<json>
{
  "TitleSlide": { "title": "\${topic}", "subtitle": "An In-Depth Analysis" },
  "Agenda": ["Introduction", "Market Trends", "Key Insights", "Solutions", "Conclusion"],
  "Slides": [
    {
      "heading": "Introduction",
      "bullets": ["What is \${topic}?", "Why it matters in 2025", "Global impact stats"],
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
  "Conclusion": ["\${topic} is the future", "Act now to stay ahead", "Innovation drives success"],
  "CallToAction": "Start your \${topic} journey today – contact us!"
}
</json>`;

const JSONResponse = `{
  "TitleSlide": {
    "title": "AI is transforming the marketing industry. Make it only 5 slides",
    "subtitle": "How Artificial Intelligence is Reshaping Modern Marketing Strategies"
  },
  "Agenda": [
    "The AI Marketing Revolution",
    "Hyper-Personalization at Scale",
    "Predictive Analytics & Customer Insights",
    "Automated Content Creation",
    "The Future of Marketing"
  ],
  "Slides": [
    {
      "heading": "The AI Marketing Revolution is Here",
      "bullets": [
        "AI adoption in marketing grew 186% from 2022–2024",
        "By 2028, AI marketing tech market will reach $107.5 billion",
        "78% of top-performing companies now use AI in marketing"
      ],
      "highlight": "$107.5B market by 2028",
      "imageHint": "exponential growth curve with glowing AI particles"
    },
    {
      "heading": "Hyper-Personalization at Scale",
      "bullets": [
        "Deliver unique experiences to millions simultaneously",
        "Netflix: 75% of viewer activity driven by recommendations",
        "Dynamic email open rates increase 3x with AI personalization"
      ],
      "highlight": "1-to-1 marketing at global scale",
      "imageHint": "digital web connecting thousands of unique user profiles"
    },
    {
      "heading": "Predictive Analytics & Customer Intelligence",
      "bullets": [
        "Predict churn with 92% accuracy",
        "Forecast campaign performance before launch",
        "Identify high-value customers 10x faster"
      ],
      "highlight": "92% churn prediction accuracy",
      "imageHint": "futuristic dashboard with predictive graphs and AI brain"
    },
    {
      "heading": "Intelligent Content Creation",
      "bullets": [
        "Generate 1000+ personalized ad variants in minutes",
        "Auto-optimize headlines, images, and CTAs",
        "Reduce content production time by 90%"
      ],
      "highlight": "90% faster content production",
      "imageHint": "AI generating multiple ad creatives instantly"
    },
    {
      "heading": "The Future is Now",
      "bullets": [
        "AI isn't replacing marketers — it's empowering them",
        "Early adopters are gaining 3–5x ROI advantage",
        "The question isn't if — it's how fast"
      ],
      "highlight": "Act now or fall behind",
      "imageHint": "marketer standing confidently with AI as co-pilot"
    }
  ],
  "Conclusion": [
    "AI is the biggest transformation in marketing since digital",
    "The tools are ready. The data is here. The future is now.",
    "Companies that embrace AI will lead. Others will follow — or disappear."
  ],
  "CallToAction": "Ready to transform your marketing with AI? Let's talk today."
}`

export default function PresentationGenerationFlow() {
  return (
    <section className="bg-gray-50 text-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            🎤 Presentation Generation Pipeline – End-to-End AI Workflow
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A complete automated slide creation system using Prompt Engineering,
            LLaMA inference API, JSON-based slide structure, dynamic image fetching,
            and React Presentation Template Rendering.
          </p>
        </motion.div>

        {/* Overview */}
        <Section title="1. Overview">
          <p>
            This pipeline converts a simple topic into a fully structured presentation using:
            <strong>
              user prompts → engineered JSON prompts → LLaMA 3.1 inference → structured slide JSON → slide image generation → presentation template rendering.
            </strong>
          </p>
        </Section>

        {/* Architecture */}
        <Section title="2. System Architecture (End-to-End)">
          <pre className="bg-black text-gray-200 p-5 rounded-xl text-sm leading-7">
            {`User Input Terminal
        ↓
Prompt Engineering Layer
        ↓
LLaMA LLM API (HuggingFace Router)
        ↓
Validated Presentation JSON Response
        ↓
Presentation Template Rendering (React Components)
        ↓
Final Presentation Output (Fully Rendered UI)`}
          </pre>
        </Section>

        {/* Step by Step */}
        <Section title="3. Step-by-Step Pipeline Explanation">

          {/* Step 1 */}
          <SubSection icon={<Terminal />} title="Step 1: User Input">
            <p className="mb-4">
              The user Enters The Prompt.
            </p>
            <CodeBlock code={`AI is transforming the marketing industry. Make it only 5 slides`} />
          </SubSection>

          {/* Step 2 */}
          <SubSection icon={<Workflow />} title="Step 2: Prompt Engineering Layer">
            <p className="mb-4">
              The system constructs a strict JSON-only presentation prompt.
            </p>
            <CodeBlock code={PromptEngineering} />
          </SubSection>

          {/* Step 3 - HF ROUTER API */}
          <SubSection icon={<Code2 />} title="Step 3: LLaMA LLM API (HuggingFace Router Inference)">
            <p className="mb-4">
              The system sends the engineered prompt to HuggingFace Router
              using the Llama 3.1 8B Instruct model.
            </p>

            <CodeBlock code={`
export async function queryAI(messages) {
  const response = await fetch(
    "https://router.huggingface.co/v1/chat/completions",
    {
      headers: {
        Authorization: "Bearer hf_KEY",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        messages,
        model: "meta-llama/Llama-3.1-8B-Instruct:novita",
      }),
    }
  );
  return response.json();
}`} />
          </SubSection>

          {/* Step 4 */}
          <SubSection icon={<FileJson />} title="Step 4: Validated Presentation JSON Response">
            <p className="mb-4">
              The model returns structured JSON wrapped in &lt;json&gt; tags.
            </p>

            <CodeBlock code={JSONResponse} />
          </SubSection>

          {/* Step 5 – Image Pipeline */}
          <SubSection icon={<ImageIcon />} title="Step 5: Slide Image Generation Pipeline">
            <p className="mb-4">
              For each slide, your system fetches a relevant image from the chosen provider.
            </p>

            <CodeBlock code={`{
  "imageUrl": "https://images.unsplash.com/ai-marketing-dashboard.jpg",
  "keywordUsed": "AI marketing"
}`} />
          </SubSection>

          {/* Step 6 – Presentation Template Rendering */}
          <SubSection icon={<Layers />} title="Step 6: Presentation Template Rendering (React Components)">
            <p className="mb-4">
              The system injects the validated JSON + slide images into your
              modular React Presentation Template:
            </p>

            <ul className="list-disc ml-6 text-gray-700">
              <li>&lt;TitleSlide title="..." subtitle="..." /&gt;</li>
              <li>&lt;AgendaSlide items="..." /&gt;</li>
              <li>&lt;Slide heading="..." bullets="..." imageUrl="..." /&gt;</li>
              <li>&lt;ConclusionSlide content="..." /&gt;</li>
            </ul>

            <p className="mt-4 text-gray-800">
              This creates a clean, modern corporate slide deck automatically.
            </p>
          </SubSection>



          <SubSection icon={<Video />} title="Step 7: Final Presentation Output (Fully Rendered UI)">
            <p className="mb-4">
              This section contains your final workflow demonstration video.
            </p>

            {/* 21:9 Aspect Ratio Wrapper */}
            <div
              className="relative w-full border border-gray-800 overflow-hidden bg-black"
              style={{ paddingBottom: "42.85%" }} // 9 / 21 = 0.4285
            >
              <video
                src={presentationVideo}
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </SubSection>


        </Section>

        {/* Conclusion */}
       

      </div>
    </section>
  );
}
function Section({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </motion.div>
  );
}

function SubSection({ title, icon, children }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-gray-100 rounded-xl text-indigo-600">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function CodeBlock({ code }) {
  return (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl text-sm overflow-auto whitespace-pre-wrap">
      {code}
    </pre>
  );
}
