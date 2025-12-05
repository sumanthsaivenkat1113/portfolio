import { User, Zap, Layers, LayoutTemplate } from "lucide-react";
const steps = [
  { icon: User, title: "1. User Input", desc: "User provides a prompt." },
  { icon: Zap, title: "2. Parallel API Calls", desc: "Calls LLM + Image API simultaneously." },
  { icon: Layers, title: "3. Data Merge", desc: "Merge JSON + Image URLs." },
  { icon: LayoutTemplate, title: "4. Template Render", desc: "Render final content." },
];
export default function WorkflowSection() {
  return (
    <section>
      <h2 className="text-4xl font-extrabold text-center mb-16">Workflow</h2>
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12">
        <div className="space-y-16 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start gap-8 border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
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
  );
}