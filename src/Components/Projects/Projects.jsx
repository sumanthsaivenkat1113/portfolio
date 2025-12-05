
import React, { useState } from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt, FaMedium } from "react-icons/fa";
import blog from '../../assets/videos/blog/blog.mp4';
import inspireGenImage from '../../assets/images/inspireGen-ai.png'
import EasemedImage from '../../assets/images/Easemed.png'
import PHRImage from '../../assets/images/PHR.png'
import StockPricePredictionImage from '../../assets/images/Stock-Price-Prediction.png'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiHuggingface,
  SiGoogle,
  SiReact,
  SiPython,
  SiFlask,
  SiMongodb,
  SiBootstrap,
  SiJupyter,
  SiSqlite,
  SiTensorflow,
  SiKeras,
  SiVite
} from "react-icons/si";

import { MdImage } from "react-icons/md";
import { GiCube } from "react-icons/gi";


export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  const projects = [
    {
      title: "InspireGen — AI Content Generation Platform",
      emoji: "✨",
      image: inspireGenImage,
      video: blog,
      canPlay: true, // ONLY THIS PROJECT CAN PLAY
      description: [
        "AI platform for generating blogs, posts, and marketing content.",
        "Powered by LLaMA (Hugging Face) + integrated image APIs.",
        "Includes templates, custom editor, and Google Auth."
      ],
      tech: [
        <SiHuggingface className="w-6 h-6" />,
        <MdImage className="w-6 h-6" />,
        <SiGoogle className="w-6 h-6" />,
        <SiReact className="w-6 h-6" />,
        <SiVite className="w-6 h-6" />,
      ],
      github: "#",
      live: "#",
      blog: false,
      caseStudy: "/case-study/inspiregen",
    },

    {
      title: "Easemed — Web-Based Solutions",
      emoji: "💊",
      image: EasemedImage,
      video: null,
      canPlay: false,
      description: [
        "Secure online registration and appointment scheduling",
        "Access and manage health information easily",
        "Boosts efficiency by 30% and patient engagement by 70%",
      ],
      tech: [
        <SiHtml5 className="w-6 h-6" />,
        <SiCss3 className="w-6 h-6" />,
        <SiJavascript className="w-6 h-6" />,
        <SiNodedotjs className="w-6 h-6" />,
        <SiExpress className="w-6 h-6" />,
        <SiMysql className="w-6 h-6" />,
      ],
      github: "https://github.com/sumanthsaivenkat1113/Easemed-webapp",
      live: false,
      blog: false,
    },

    {
      title: "PHR Management Using Blockchain Functionality",
      emoji: "🧬",
      image: PHRImage,
      video: null,
      canPlay: false,
      description: [
        "Secure healthcare record system with blockchain-style validation",
        "Role-based access for admins, doctors, and patients",
        "Designed for reliable and scalable medical data management",
      ],
      tech: [
        <SiPython className="w-6 h-6" />,
        <SiFlask className="w-6 h-6" />,
        <SiMongodb className="w-6 h-6" />,
        <GiCube className="w-6 h-6" />,
        <SiHtml5 className="w-6 h-6" />,
        <SiCss3 className="w-6 h-6" />,
        <SiJavascript className="w-6 h-6" />,
        <SiBootstrap className="w-6 h-6" />,
      ],
      github: "https://github.com/sumanthsaivenkat1113/PHR-MANAGEMENT",
      live: false,
      blog: false,
    },

    {
      title: "Stock Price Prediction Using Deep Learning",
      emoji: "📈",
      image: StockPricePredictionImage,
      video: null,
      canPlay: false,
      description: [
        "Deep learning-based stock prediction using LSTM, RNN, GRU & BiLSTM",
        "Analyzes historical data, sentiment, and economic indicators",
        "Trained for high accuracy to support informed financial decisions",
      ],
      tech: [
        <SiPython className="w-6 h-6" />,
        <SiTensorflow className="w-6 h-6" />,
        <SiKeras className="w-6 h-6" />,
        <SiJupyter className="w-6 h-6" />,
        <SiFlask className="w-6 h-6" />,
        <SiSqlite className="w-6 h-6" />,
        <SiHtml5 className="w-6 h-6" />,
        <SiCss3 className="w-6 h-6" />,
        <SiJavascript className="w-6 h-6" />,
        <SiBootstrap className="w-6 h-6" />,
      ],
      github: "https://github.com/sumanthsaivenkat1113/Stock-Price-Prediction-Using-Deep-Learning",
      live: false,
      blog: false,
    },
  ];

  const openVideo = (video) => {
    if (video) setActiveVideo(video);
  };

  const closeVideo = () => setActiveVideo(null);

  return (
    <section className="projects-section" id='projects'>
      <div className="projects-header">
        <h1 className="projects-title">🚀 Projects</h1>
        <p className="projects-sub">Click the thumbnail to preview the demo.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">

            {/* Thumbnail Area */}
            <div
              className="thumb-wrapper"
              role={project.canPlay ? "button" : undefined}
              tabIndex={project.canPlay ? 0 : -1}
              aria-label={project.canPlay ? `Play ${project.title} demo` : undefined}
              onClick={() => project.canPlay && openVideo(project.video)}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && project.canPlay) {
                  e.preventDefault();
                  openVideo(project.video);
                }
              }}
            >
              <img
                src={project.image}
                alt={`${project.title} thumbnail`}
                className="project-thumb"
                loading="lazy"
              />

              {/* Play button ONLY for InspireGen */}
              {project.canPlay && (
                <div className="play-overlay" aria-hidden>
                  <span className="play-circle" />
                  <span className="play-triangle">▶</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="project-content">
              <div className="project-header">
                <span className="project-emoji">{project.emoji}</span>
                <h2 className="project-title">{project.title}</h2>
              </div>

              <ul className="project-description">
                {project.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              <h4 className="tech-heading">Technologies</h4>
              <div className="tech-icons">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-icon" aria-hidden>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> <span>GitHub</span>
                </a>

                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> <span>Live</span>
                  </a>
                )

                }

                {project.blog && (
                  <a href={project.blog} target="_blank" rel="noreferrer">
                    <FaMedium /> <span>Blog</span>
                  </a>
                )
                }

                {project.caseStudy && (
                  <a
                    href={project.caseStudy}
                    className="case-study-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📄 <span>Case Study</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* VIDEO PLAYER OVERLAY */}
      {activeVideo && (
        <div className="video-overlay" onClick={closeVideo} role="dialog" aria-modal="true">
          <video
            src={activeVideo}
            autoPlay
            muted
            loop
            controls
            className="video-player"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
