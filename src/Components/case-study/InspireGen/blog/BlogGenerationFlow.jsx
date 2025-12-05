import blogVideo from '../../../../assets/videos/blog/blog.mp4'
import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Workflow,
  Code2,
  FileJson,
  Video,
  BookOpen,
  ArrowRight,
  Sparkles,
  ImageIcon,
  Layers,
} from "lucide-react";

export default function BlogGenerationFlow() {
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
            📄 Blog Generation Pipeline – End-to-End AI Workflow
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A production-grade content pipeline using Prompt Engineering,
            LLaMA inference API, JSON processing and React-based Blog Template Rendering.
          </p>
        </motion.div>

        {/* Overview */}
        <Section title="1. Overview">
          <p>
            This system converts simple user input into a fully formatted article by combining:
            <strong> user prompts → engineered system prompts → LLaMA model inference → JSON blog output → image generation output → blog template rendering.</strong>
          </p>
        </Section>

        {/* Architecture Diagram */}
        <Section title="2. System Architecture (End-to-End)">
          <pre className="bg-black text-gray-200 p-5 rounded-xl text-sm leading-7">
            {`User Input Terminal  
        ↓  
Prompt Engineering Layer  
        ↓  
LLaMA LLM API (HuggingFace Router)  
        ↓  
Validated JSON Response  
        ↓  
Blog Template Rendering (React Components)  
        ↓  
Final Blog Output (Fully Rendered UI)`}
          </pre>
        </Section>

        {/* Step by Step */}
        <Section title="3. Step-by-Step Pipeline Explanation">

          {/* Step 1 */}
          <SubSection icon={<Terminal />} title="Step 1: User Input">
            <p className="mb-4">
              The user enters the topic for the AI to generate a blog on.
            </p>
            <CodeBlock code={`3 things to do in India`} />
          </SubSection>

          {/* Step 2 */}
          <SubSection icon={<Workflow />} title="Step 2: Prompt Engineering Layer">
            <p className="mb-4">
              The system dynamically constructs a powerful JSON-guided prompt.
            </p>
            <CodeBlock code={`
You are an AI blog generator.
Generate a detailed blog about "\${topic}" in JSON format.
Wrap your response strictly inside <json>...</json> tags.

<json>
{
  "Header": { "title": "A blog post about \${topic}" },
  "Introduction": { "introduction": "Write a short, engaging introduction." },
  "Content": [
    { "subheading": "Main point 1", "details": "Details for point 1" },
    { "subheading": "Main point 2", "details": "Details for point 2" },
    { "subheading": "Main point 3", "details": "Details for point 3" }
  ],
  "Conclusion": { "conclusion": "Wrap up the topic with final thoughts." }
}
</json>`} />
          </SubSection>

          {/* Step 3 - UPDATED */}
          <SubSection icon={<Code2 />} title="Step 3: LLaMA LLM API (HuggingFace Router Inference)">
            <p className="mb-4">
              The engineered prompt is sent to <b>HuggingFace Router Chat Completions API</b>, using the Meta Llama 3.1 model.
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
          <SubSection icon={<FileJson />} title="Step 4: Validated JSON Blog Response">
            <p className="mb-4">
              The LLM returns a structured JSON blog response inside &lt;json&gt; tags.
            </p>
            <CodeBlock code={`{
  "Header": {
    "title": "3 Unforgettable Experiences: A Journey Through India's Soul"
  },
  "Introduction": {
    "introduction": "India is not just a country; it's a vibrant tapestry of ancient cultures, breathtaking landscapes, and profound spirituality. From snow-capped mountains to sun-kissed beaches, and bustling cities to serene villages, India offers experiences that touch the soul."
  },
  "Content": [
    {
      "subheading": "1. Witness the Eternal Symbol of Love: The Taj Mahal",
      "details": "No trip to India is complete without standing before the majestic Taj Mahal in Agra. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, this white marble masterpiece is one of the Seven Wonders of the World. Visit at sunrise for ethereal golden light and fewer crowds."
    },
    {
      "subheading": "2. Embark on a Spiritual Voyage on the Ganges in Varanasi",
      "details": "Varanasi, one of the oldest continuously inhabited cities in the world, is the spiritual heart of India. Witness the evening Ganga Aarti ceremony, take a boat ride at dawn as the city awakens with prayer, and experience the profound cycle of life and death along the sacred river."
    },
    {
      "subheading": "3. Go on a Wildlife Safari in Ranthambore National Park",
      "details": "For a thrilling change of pace, head to Ranthambore in Rajasthan — one of India's premier tiger reserves. Beyond majestic Bengal tigers, spot leopards, sloth bears, and over 300 bird species amid ancient ruins and dramatic landscapes."
    }
  ],
  "Conclusion": {
    "conclusion": "India is more than a destination — it's a feeling. These three experiences barely scratch the surface of what this incredible country offers. Whether you're seeking history, spirituality, or adventure, India will leave an indelible mark on your heart."
  }
}`} />
          </SubSection>

          {/* Step 5 */}
          <SubSection icon={<ImageIcon />} title="Step 5: Image Generation Pipeline (Async)">
            <p className="mb-4">
              Your system fetches related images using the selected provider (Unsplash, etc.).
            </p>
            <CodeBlock code={`{
  "imageUrl": "https://images.unsplash.com/tajmahal.jpg",
  "keywordUsed": "Taj Mahal"
}`} />
          </SubSection>

          {/* Step 6 - YOUR BLOG TEMPLATE */}
          <SubSection icon={<Layers />} title="Step 6: Blog Template Rendering (React Components)">
            <p className="mb-4">
              The validated JSON + images are injected into your **Blog Template system**.
            </p>

            <ul className="list-disc ml-6 text-gray-700">
              <li>&lt;BlogHeader heading="..." headerImageUrl="..." /&gt;</li>
              <li>&lt;BlogIntro introductionText="..." /&gt;</li>
              <li>&lt;BlogContent subHeadingText="..." imageUrl="..." content="..." /&gt;</li>
              <li>&lt;BlogConclusion conclusion="..." /&gt;</li>
            </ul>

            <p className="mt-4 text-gray-800">
              This creates a clean, professional article layout every time — fully automated.
            </p>
          </SubSection>

          {/* Step 7 */}
          <SubSection icon={<Video />} title="Step 7: Final Blog Output (Fully Rendered UI)">
            <p className="mb-4">
              A dedicated area to embed a demo video showing the full workflow.
            </p>

            <div className="relative w-full  overflow-hidden border border-gray-800"
              style={{ paddingBottom: "42.85%" }}>
              {/* 21:9 aspect ratio → 9/21 = 0.4285 → 42.85% */}
              <video
                src={blogVideo}
                autoPlay
                muted
                loop
                className="absolute inset-0 h-full w-full object-cover"
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
