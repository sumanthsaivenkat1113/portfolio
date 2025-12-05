import './style.css'
import { FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiExpress, SiMysql } from "react-icons/si";


export default function HeroSection() {
  return (
    <>
      <div className="hero-section-wrapper fade-in">
        <div className="hero-section slide-up">
          {/* Heading */}
          <div className="hero-section-heading pop-in">
            <span className="hero-section-heading--name glow">Hi, I'm Sumanth</span>
            <span className="hero-section-heading--dash"></span>
            <span className="hero-section-heading--role glow-soft">A Full Stack Web Developer.</span>
          </div>


          {/* Description + Tech */}
          <div className="hero-section-info">
            <div className="hero-section-info--one">
              <div className="hero-section-info--one_text fade-in-delay-1">
                I build fast, interactive, and scalable web applications using modern technologies.
              </div>
              <div className="hero-section-info--one_text subtext fade-in-delay-2">
                My focus is on clean UI, efficient backend systems, and seamless user experience.
              </div>


              {/* Tech Stack */}
              <div className="hero-section-info--one_btns stagger-container">
                <div className="tech-item js stagger-item float">
                  <FaJs className="tech-icon js-icon" /> JavaScript
                </div>
                <div className="tech-item react stagger-item float">
                  <FaReact className="tech-icon react-icon" /> React
                </div>
                <div className="tech-item express stagger-item float">
                  <SiExpress className="tech-icon express-icon" /> Express.js
                </div>
                <div className="tech-item node stagger-item float">
                  <FaNodeJs className="tech-icon node-icon" /> Node.js
                </div>
                <div className="tech-item python stagger-item float">
                  <FaPython className="tech-icon python-icon" /> Python
                </div>
                <div className="tech-item sql stagger-item float">
                  <SiMysql className="tech-icon sql-icon" /> SQL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}











