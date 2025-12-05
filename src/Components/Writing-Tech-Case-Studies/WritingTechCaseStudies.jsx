import { motion } from "framer-motion";
import { FiExternalLink, FiArrowRight, FiHardDrive } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import InspireGen_caseStudy from "./images/InspireGen_caseStudy.png";
import LLaMAPlyground from "./images/LLaMA-plyground.png"
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function WritingCaseStudies() {
  const writings = [
    {
      type: "case",
      title: "InspireGen – AI-Powered Quote & Visual Generator",
      desc: "A full-stack SaaS app that combines motivational quotes with stunning AI-generated visuals using Hugging Face, React, and FastAPI. Features Google Auth, history tracking, multi-source image APIs (Pexels, Pixabay, Unsplash), and social sharing.",
      thumbnail: InspireGen_caseStudy,
      link: "/case-study/inspiregen",
      tags: ["React.js", "FastAPI", "Hugging Face", "Google Auth", "SaaS"],
      newTab: false,
    },
    {
      type: "article",
      title: "🧠 How I Integrated Hugging Face LLaMA API into a React App: A Complete Developer Guide",
      desc: "Step-by-step guide on integrating Hugging Face LLaMA API with React, including setup, hooks, deployment, and best practices for building AI-powered apps.",
      thumbnail: LLaMAPlyground,
      link: "https://medium.com/@gunjisumanthsaivenkat/how-i-integrated-hugging-face-llama-api-into-a-react-app-a-complete-developer-guide-4ebc6501015b",
      tags: ["React", "Hugging Face", "LLaMA", "AI", "Frontend"],
      newTab: true
    },
  ];

  const renderBadge = (type) => {
    const isCase = type === "case";
    return (
      <span
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-sm ${isCase
            ? "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
            : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
          }`}
      >
        {isCase ? <FiHardDrive className="w-4 h-4" /> : <BsPencilSquare className="w-4 h-4" />}
        {isCase ? "Case Study" : "Technical Article"}
      </span>
    );
  };

  return (
    <section id="writing" className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Technical Writing &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Case Studies
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Real projects, deep insights, and lessons learned from building modern web applications
          </p>
        </motion.div>

        {/* Cards - Vertical Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-12 md:gap-16"
        >
          {writings.map((item, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-900/70 rounded-3xl overflow-hidden shadow-xl border border-gray-200/70 dark:border-gray-800 backdrop-blur-sm
                         transition-all duration-500 hover:shadow-2xl hover:border-indigo-400/50 hover:-translate-y-2"
            >
              {/* Full Card Clickable Overlay */}
              <a
                href={item.link}
                target={item.newTab ? "_blank" : "_self"}
                rel={item.newTab ? "noopener noreferrer" : ""}
                className="absolute inset-0 z-10"
                aria-label={`Read ${item.title}`}
              >
                <span className="sr-only">Open {item.title}</span>
              </a>

              {/* Flex Row: Image Left, Content Right */}
              <div className="flex flex-col md:flex-row min-h-96">
                {/* Fixed Aspect Ratio Image Container */}
                <div className="relative md:w-96 lg:w-[420px] flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                    loading={index === 0 ? "eager" : "lazy"}
                    // Forces perfect 4:3 aspect ratio on all screens
                    style={{ aspectRatio: "4 / 3" }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-white font-bold text-sm bg-black/50 backdrop-blur px-4 py-2 rounded-full">
                    Click to explore →
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    {renderBadge(item.type)}

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                      {item.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-10">
                    <span className="inline-flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-bold text-lg group-hover:gap-5 transition-all duration-300">
                      {item.type === "case" ? "View Full Case Study" : "Read the Article"}
                      {item.newTab ? <FiExternalLink className="w-6 h-6" /> : <FiArrowRight className="w-6 h-6" />}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Final CTA */}
        <div className="text-center mt-20 md:mt-28">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://medium.com/@gunjisumanthsaivenkat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold text-xl rounded-2xl shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
          >
            Explore All Blog Posts & Case Studies
            <FiExternalLink className="w-7 h-7" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}