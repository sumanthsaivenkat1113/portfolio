import React from "react";
import { Pencil } from "lucide-react";
import UserInputTerminal from "./blog/UserInputTerminal";
import PromptCard from "./blog/PromptCard";
import OutputCard from "./blog/OutputCard";
import FlowArrow from "./blog/FlowArrow";
import BlogGenerationFlow from "./blog/BlogGenerationFlow";

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
}`;


export default function BlogGeneration() {
  const exampleTopic = "3 things to do in India";
  const examplePrompt = generateBlogPrompt(exampleTopic);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-indigo-100">
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-indigo-200">
        <Pencil size={36} className="text-indigo-600" />
        <h3 className="text-3xl font-bold text-gray-900">1. Blog Article Generation</h3>
      </div>

      <div className="space-y-10">
        <UserInputTerminal />
        <FlowArrow />
        <PromptCard
          title="B. Prompt Engineering"
          subtitle="(Dynamic Contract Function)"
          badge="System Prompt"
          content={examplePrompt}
          copyText={examplePrompt}
        />
        <FlowArrow />
        <OutputCard content={blogLLMOutput} copyText={blogLLMOutput} />
        <BlogGenerationFlow/>
      </div>
    </div>
  );
}