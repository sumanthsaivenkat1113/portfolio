import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero-section";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import SkillsSection from "./Components/Skills/SkillsSection";
import InspireGen from "./Components/case-study/InspireGen/InspireGen";
import WritingTechCaseStudies from "./Components/Writing-Tech-Case-Studies/WritingTechCaseStudies";
export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <section id="home"><HeroSection /></section>
              <section id="projects"><Projects /></section>
              <section id="skills"><SkillsSection /></section>
              <section id="writing"><WritingTechCaseStudies/></section>
              <section id="about"><About /></section>
            </>
          }
        />
        <Route path="/case-study/inspiregen" element={<InspireGen />} />
      </Routes>
    </>

  );
}
