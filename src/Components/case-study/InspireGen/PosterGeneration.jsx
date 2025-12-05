import PosterGenerationHeader from "./poster/PosterGenerationHeader";
import UserInputTerminal from "./poster/UserInputTerminal";
import PromptEngineeringCard from "./Poster/PromptEngineeringCard";
import LLMOutputCard from "./Poster/LLMOutputCard";
import ArrowConnector from "./Poster/ArrowConnector";
import PosterGeneratorFlow from "./Poster/PosterGeneratorFlow";

export default function PosterGeneration() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-emerald-100">
      <PosterGenerationHeader />

      <div className="space-y-14">
        <UserInputTerminal />
        <ArrowConnector />
        <PromptEngineeringCard />
        <ArrowConnector />
        <LLMOutputCard />
        <PosterGeneratorFlow/>
      </div>
    </div>
  );
}