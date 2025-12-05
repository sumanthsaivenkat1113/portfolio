import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import {
  SiExpress,
  SiFlask,
  SiFastapi,
  SiBootstrap,
  SiTailwindcss,
  SiStyledcomponents,
  SiVite,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostman,
  SiAxios,
  SiVercel,
  SiNetlify,
  SiClerk,
  SiFigma,
  SiHuggingface,
  SiMaterialdesign, // MUI
  SiNpm,
  SiPypi, // pip
  SiShadcnui, // shadcn/ui
} from "react-icons/si";
import { TbBrandNextjs, TbBrandGithubFilled } from "react-icons/tb";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Epic Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-5">
            🚀 My Skills
          </h2>
         
        </motion.div>

        <div className="grid gap-12 lg:gap-16">
          {/* Frontend */}
          <SkillCategory title="Frontend Development" skills={[
            { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-600" },
            { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-600" },
            { icon: <FaJs />, label: "JavaScript", color: "text-yellow-500" },
            { icon: <FaReact />, label: "React.js", color: "text-cyan-500" },
            { icon: <SiTailwindcss />, label: "Tailwind CSS", color: "text-teal-500" },
            { icon: <SiBootstrap />, label: "Bootstrap", color: "text-purple-600" },
            { icon: <SiStyledcomponents />, label: "Styled Comp.", color: "text-pink-500" },
            { icon: <SiMaterialdesign />, label: "MUI", color: "text-blue-700" },
            { icon: <SiShadcnui />, label: "shadcn/ui", color: "text-orange-500" },
            { icon: <SiVite />, label: "Vite", color: "text-purple-600" },
          ]} />

          {/* Backend & APIs */}
          <SkillCategory title="Backend & APIs" skills={[
            { icon: <FaNodeJs />, label: "Node.js", color: "text-green-600" },
            { icon: <SiExpress />, label: "Express.js", color: "text-gray-700" },
            { icon: <SiFlask />, label: "Flask", color: "text-gray-800" },
            { icon: <SiFastapi />, label: "FastAPI", color: "text-teal-600" },
            { icon: <SiAxios />, label: "REST APIs", color: "text-purple-600" },
          ]} />

          {/* Languages */}
          <SkillCategory title="Languages" skills={[
            { icon: <FaJava />, label: "Java", color: "text-orange-700" },
            { icon: <SiCplusplus />, label: "C++", color: "text-blue-600" },
            { icon: <FaPython />, label: "Python", color: "text-yellow-500" },
            { icon: <FaJs />, label: "JavaScript", color: "text-yellow-400" },
          ]} />

          {/* Databases */}
          <SkillCategory title="Databases" skills={[
            { icon: <SiMongodb />, label: "MongoDB", color: "text-green-500" },
            { icon: <SiMysql />, label: "MySQL", color: "text-orange-600" },
          ]} />

          {/* Tools & Ecosystem */}
          <SkillCategory title="Tools & Ecosystem" skills={[
            { icon: <TbBrandGithubFilled />, label: "GitHub", color: "text-gray-900" },
            { icon: <SiGit />, label: "Git", color: "text-orange-600" },
            { icon: <SiNpm />, label: "npm", color: "text-red-600" },
            { icon: <SiPypi />, label: "pip", color: "text-blue-600" },
            { icon: <SiPostman />, label: "Postman", color: "text-orange-500" },
            { icon: <SiFigma />, label: "Figma", color: "text-purple-500" },
            { icon: <SiHuggingface />, label: "Hugging Face", color: "text-yellow-400" },
            { icon: <SiVercel />, label: "Vercel", color: "text-black" },
            { icon: <SiNetlify />, label: "Netlify", color: "text-cyan-500" },
            { icon: <SiClerk />, label: "Clerk Auth", color: "text-indigo-600" },
          ]} />
        </div>
      </div>
    </section>
  );
}

// Category Wrapper
function SkillCategory({ title, skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 flex items-center gap-4">
        <div className="w-12 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} delay={i * 0.05} />
        ))}
      </div>
    </motion.div>
  );
}

// Premium Skill Card
function SkillCard({ icon, label, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -12, 
        scale: 1.1,
        rotateY: 8,
      }}
      className="group relative p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/70 shadow-lg hover:shadow-2xl transition-all duration-400 cursor-default overflow-hidden"
      style={{ transform: 'perspective(1000px)' }}
    >
      {/* Hover Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shine Sweep */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className={`text-5xl ${color} group-hover:scale-115 transition-all duration-300 drop-shadow-md`}>
          {icon}
        </div>
        <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
          {label}
        </p>
      </div>
    </motion.div>
  );
}