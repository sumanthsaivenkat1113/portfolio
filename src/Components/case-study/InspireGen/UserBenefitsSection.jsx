import { motion } from "framer-motion";
const userBenefits = [
  { icon: "💡", title: "Generate Blogs", desc: "Create structured, multi-topic blog articles instantly." },
  { icon: "📊", title: "Build Presentations", desc: "Auto-generate corporate-style slide decks with visual and textual content." },
  { icon: "🎨", title: "Design Posters", desc: "Produce creative, multi-modal poster content with design hints included." },
  { icon: "📝", title: "Use Templates", desc: "Leverage pre-designed templates for consistent formatting and rapid content creation." },
  { icon: "✏️", title: "Preview & Edit", desc: "Review AI-generated content and make real-time edits before publishing." },
  { icon: "🤖", title: "AI Study Assistant (Coming Soon)", desc: "Ask questions and get structured answers instantly." },
];

const whyBuilt = [
  { icon: "⚡", title: "Instant Content Generation", desc: "Create blogs, presentations, and posters in seconds." },
  { icon: "📊", title: "Structured & Predictable Output", desc: "Save time with AI content that follows a strict JSON schema." },
  { icon: "🎨", title: "Consistency Across Media", desc: "Ensure text and visuals align perfectly without manual edits." },
  { icon: "🛠️", title: "Real-time Customization", desc: "Edit AI-generated content instantly to match your needs." },
  { icon: "🚀", title: "Accelerated Workflow", desc: "Combine multiple AI services in one platform for faster delivery." },
];

const BenefitItem = ({ icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative p-6 rounded-lg cursor-pointer hover:bg-indigo-50 transition w-full"
  >
    <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 rounded-l-lg opacity-0 group-hover:opacity-100 transition-all" />
    <p className="text-lg relative z-10 flex items-start gap-3">
      <span className="text-2xl">{icon}</span>
      <span><b>{title}:</b> {desc}</span>
    </p>
  </motion.div>
);

export default function UserBenefitsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 bg-[repeating-linear-gradient(45deg,#f9fafb,#f9fafb 20px,#f3f4f6 20px,#f3f4f6 40px)]">
      <div className="max-w-5xl mx-auto px-6 space-y-32">

        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-gray-900">What Users Can Do with InspireGen</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            InspireGen enables users to generate structured, high-quality content effortlessly.
          </p>
          <div className="space-y-4 text-left text-gray-700 text-lg md:text-xl">
            {userBenefits.map((item, i) => <BenefitItem key={i} {...item} index={i} />)}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Why I Built InspireGen</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            To simplify content creation and help users focus on ideas while the platform handles structure, design, and consistency.
          </p>
          <div className="space-y-4 text-left text-gray-700 text-lg md:text-xl">
            {whyBuilt.map((item, i) => <BenefitItem key={i} {...item} index={i} />)}
          </div>
        </div>

      </div>
    </section>
  );
}