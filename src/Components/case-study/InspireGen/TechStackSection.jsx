import { Code, Brain, Image, Lock } from "lucide-react";
const stack = [
  { icon: Code, name: "React.js", desc: "Front-end UI framework." },
  { icon: Brain, name: "LLM API", desc: "Generative model for structured text." },
  { icon: Image, name: "Image API", desc: "Pexels/Unsplash/Pixabay for visuals." },
  { icon: Lock, name: "Google Auth", desc: "Secure user authentication." },
];
export default function TechStackSection() {
  return (
    <section>
      <h2 className="text-4xl font-extrabold text-center mb-16">Core Technical Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stack.map((tech, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-[1.03] transition duration-300">
            <tech.icon size={48} className="text-indigo-600 mx-auto mb-3" />
            <p className="font-bold text-gray-900">{tech.name}</p>
            <p className="text-xs text-gray-500 mt-1">{tech.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}