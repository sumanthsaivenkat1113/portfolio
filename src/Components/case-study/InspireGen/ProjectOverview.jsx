import { motion } from "framer-motion";
export default function ProjectOverview() {
  const emojis = ["✨", "🧠", "⚡", "🖼️"];
  return (
    <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-200 p-8 md:p-10"
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Project Overview
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

        <motion.div
          className="grid grid-cols-4 mt-10 text-6xl w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          {emojis.map((emoji, i) => (
            <motion.span
              key={i}
              className="flex justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 + i * 0.1, delay: i * 0.1 }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}