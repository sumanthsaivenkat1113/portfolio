import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 text-gray-900 py-24 md:py-32 mb-30 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[linear-gradient(135deg,#d4d4d4_10%,transparent_10%,transparent_50%,#d4d4d4_50%,#d4d4d4_60%,transparent_60%)] bg-[length:14px_14px]" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-5 px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-700"
        >
          Technical Case Study
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
        >
          InspireGen: Serverless AI
          <span className="block text-2xl md:text-3xl font-light text-indigo-600 mt-3">
            Structured Content Generation Engine
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 md:mt-8 text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Engineered a fully client-side multi-modal generation system (Text + Images)
          using <b>prompt engineering workflows</b> and <b>dynamic API-driven rendering</b> —
          delivering production-quality structured outputs with zero backend overhead.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-10 md:mt-12"
        >
          <a
            href="#overview"
            className="inline-flex items-center bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-md relative
            before:absolute before:inset-0 before:rounded-xl before:ring-2 before:ring-indigo-300 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
          >
            View Technical Deep Dive <ChevronRight className="ml-2" size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
