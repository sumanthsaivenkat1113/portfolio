import React from "react";
import { PieChart } from "lucide-react";
import UserInputTerminal from "./presentation/UserInputTerminal";
import PromptCard from "./presentation/PromptCard";
import OutputCard from "./presentation/OutputCard";
import FlowArrow from "./presentation/FlowArrow";
import PresentationGenerationFlow from "./presentation/PresentationGenerationFlow";

const generatePresentationPrompt = (topic) => `You are a professional presentation designer and content strategist.
Create a complete, 8-12 slide corporate-style presentation about "${topic}" in strict JSON format inside <json>...</json> tags.

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
    }
  ],
  "Conclusion": ["${topic} is the future", "Act now to stay ahead"],
  "CallToAction": "Start your ${topic} journey today – contact us!"
}
</json>`;

const presentationLLMOutput = `{
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
}`;

export default function PresentationGeneration() {
  const exampleTopic = "AI is transforming the marketing industry. Make it only 5 slides";
  const examplePrompt = generatePresentationPrompt(exampleTopic);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-purple-100">
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-purple-200">
        <PieChart size={36} className="text-purple-600" />
        <h3 className="text-3xl font-bold text-gray-900">2. Corporate Presentation Generation</h3>
      </div>

      <div className="space-y-10">
        <UserInputTerminal />
        <FlowArrow />
        <PromptCard
          title="B. Prompt Engineering"
          subtitle="(Dynamic Schema Contract)"
          badge="System Prompt"
          content={examplePrompt}
          copyText={examplePrompt}
        />
        <FlowArrow />
        <OutputCard content={presentationLLMOutput} copyText={presentationLLMOutput} />
        <PresentationGenerationFlow/>
      </div>
    </div>
  );
}