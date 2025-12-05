import posterVideo from '../../../../assets/videos/poster/posterVideo.mp4'
import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Workflow,
  Code2,
  FileJson,
  ImageIcon,
  Layers,
  Video
} from "lucide-react";

// Example JSON response
const JSONResponse = `{
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

const PromptEngineering = `
{
    MOVIE: { title: 5, tagline: 8, message: 12, cta: 7, desc: "dramatic, suspenseful, or blockbuster" },
    EVENTS: { title: 4, tagline: 6, message: 10, cta: 5, desc: "energetic, clear, and inviting" },
    INFORMATION: { title: 6, tagline: 8, message: 15, cta: 8, desc: "informative, formal, and trustworthy" },
    ADVERTISEMENT: { title: 5, tagline: 7, message: 10, cta: 6, desc: "enthusiastic, persuasive, and benefit-driven" },
    DEFAULT: { title: 6, tagline: 10, message: 15, cta: 10, desc: "creative, engaging, and general" }
}

You are an AI poster designer specializing in the **\${key}** category.
Generate a creative and catchy poster content for "\${topic}" in JSON format, with strict word limits:
* title: Max \${limits.title} words
* tagline: Max \${limits.tagline} words
* message: Max \${limits.message} words
* CallToAction.text: Max \${limits.cta} words
Tone: **\${limits.desc}**.
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
`

export default function PosterGeneratorFlow() {
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
            🎨 Poster Generation Pipeline – End-to-End AI Workflow
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A complete poster workflow example using AI prompt engineering,
            structured JSON, image placeholders, and React Poster Template rendering.
          </p>
        </motion.div>

        {/* Overview */}
        <Section title="1. Overview">
          <p>
            Converts a topic + category into a structured poster using: 
            <strong> user input → JSON prompt → validated JSON → image placeholder → poster rendering</strong>.
          </p>
        </Section>

        {/* Architecture */}
        <Section title="2. System Architecture">
          <pre className="bg-black text-gray-200 p-5 rounded-xl text-sm leading-7">
            {`User Input Terminal
        ↓
Prompt Engineering Layer
        ↓
Validated Poster JSON
        ↓
Poster Component Rendering
        ↓
Final Poster Output (Fully Rendered UI)`}
          </pre>
        </Section>

        {/* Step-by-Step */}
        <Section title="3. Step-by-Step Pipeline Explanation">

          <SubSection icon={<Terminal />} title="Step 1: User Input">
            <p>Enter poster topic and select category.</p>
            <CodeBlock code={`Topic: "Make a Horror Movie Poster"\nCategory: "MOVIE"`} />
          </SubSection>

          <SubSection icon={<Workflow />} title="Step 2: Prompt Engineering Layer">
            <p>Construct JSON prompt with category-specific word limits.</p>
            <CodeBlock code={PromptEngineering} />
          </SubSection>

          <SubSection icon={<Code2 />} title="Step 3: LLaMA LLM API">
            <p>Simulated AI step — returns structured JSON (shown below).</p>
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

          <SubSection icon={<FileJson />} title="Step 4: Validated JSON Response">
            <p>Parsed JSON from AI:</p>
            <CodeBlock code={JSONResponse} />
          </SubSection>

          <SubSection icon={<ImageIcon />} title="Step 5: Image Pipeline">
            <p>Simulated image fetch based on poster title keyword.</p>
            <CodeBlock code={`Image URL: https://source.unsplash.com/600x400/?movie`} />
          </SubSection>

          <SubSection icon={<Layers />} title="Step 6: Poster Component Rendering">
            <ul className="list-disc ml-6 text-gray-700">
              <li>&lt;PosterHeader title="..." tagline="..." /&gt;</li>
              <li>&lt;PosterMainText message="..." /&gt;</li>
              <li>&lt;PosterCTA text="..." /&gt;</li>
            </ul>
          </SubSection>

          {/* <SubSection icon={<Video />} title="Step 7: Final Demo / Preview">
            <div className="w-full aspect-video bg-black rounded-xl border border-gray-800 flex items-center justify-center">
              <p className="text-gray-500">Poster Preview Placeholder</p>
            </div>
          </SubSection> */}

          <SubSection icon={<Video />} title="Step 7: Final Poster Output (Fully Rendered UI)">
            <p className="mb-4">
              This section contains your final workflow demonstration video.
            </p>

            {/* 21:9 Aspect Ratio Wrapper */}
            <div
              className="relative w-full border border-gray-800 overflow-hidden bg-black"
              style={{ paddingBottom: "42.85%" }} // 9 / 21 = 0.4285
            >
              <video
                src={posterVideo}
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

/* ---------- UI Components ---------- */
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
