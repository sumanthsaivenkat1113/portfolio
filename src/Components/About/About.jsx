import "./About.css";
import profilePic from "../../assets/profile.jpeg";
export default function About() {
  return (
    <section id="about" className="about-section fade-in">
      <div className="about-container">

        {/* Image */}
        <div className="about-image">
          <img
            src={profilePic}
            alt="Gunji Sumanth - Full-Stack Developer"
            className="about-photo"
          />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2 className="about-title">
            About <span>Me</span>
          </h2>

          <p className="about-description">
            I’m <strong>Gunji Sumanth</strong>, a Full-Stack Developer passionate about
            creating fast, user-friendly, and scalable web applications.  
            I specialize in building real-world solutions using modern tools like  
            <strong> React, Node.js, Express, Python, and SQL</strong>.  
          </p>

          <p className="about-description">
            I enjoy transforming ideas into clean, functional interfaces and
            efficient backend systems. I'm currently exploring AI technologies
            and looking for opportunities to apply my skills in impactful
            projects and real industry work.
          </p>

          {/* Social Buttons */}
          <div className="about-socials">
            <a href="https://github.com/sumanthsaivenkat1113" target="_blank" className="social-btn github">GitHub</a>
            <a href="https://www.linkedin.com/in/gunji-sumanth-sai-venkat/" target="_blank" className="social-btn linkedin">LinkedIn</a>
            <a href="https://x.com/Sumanth_013305" target="_blank" className="social-btn x">X</a>
            <a href="https://medium.com/@gunjisumanthsaivenkat" target="_blank" className="social-btn medium">Medium</a>
            <a href="mailto:gunjisumanthsaivenkat@gmail.com"  target="_blank"className="social-btn email">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
