import '../../../style/style.css'
import React from "react";
import HeroSection from "./HeroSection";
import ProjectOverview from "./ProjectOverview";
import UserBenefitsSection from "./UserBenefitsSection";
import ChallengesAndLearnings from "./ChallengesAndLearnings";
import ContentGenerationFlow from "./ContentGenerationFlow";
import WorkflowSection from "./WorkflowSection";
import ArchitectureDiagram from "./ArchitectureDiagram";
import TechStackSection from "./TechStackSection";

export default function InspireGen() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <HeroSection />
      <ProjectOverview />
      <UserBenefitsSection />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        <ChallengesAndLearnings />
        <hr className="my-16 border-t border-gray-200" />
        <ContentGenerationFlow />
        <hr className="my-16 border-t border-gray-200" />
        <WorkflowSection />
        <hr className="my-16 border-t border-gray-200" />
        <ArchitectureDiagram />
        <hr className="my-16 border-t border-gray-200" />
        <TechStackSection />
      </div>
    </div>
  );
}