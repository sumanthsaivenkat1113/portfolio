import BlogGeneration from "./BlogGeneration";
import PresentationGeneration from "./PresentationGeneration";
import PosterGeneration from "./PosterGeneration";
import ImageGenerationCard from "./images/ImageGenerationCard";

export default function ContentGenerationFlow() {
  return (
    <section id="multi-format" className="pt-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
        Technical Execution: Content by Design
      </h2>
      <p className="text-xl text-gray-700 text-center mb-20 max-w-4xl mx-auto">
        A dedicated <b>Prompt Engineering Function</b> creates a unique, self-describing <b>JSON Schema</b> for each content type, guaranteeing predictable output.
      </p>

      <div className="space-y-24">
        <BlogGeneration />
        <PresentationGeneration />
        <PosterGeneration />
        <ImageGenerationCard/>
      </div>
    </section>
  );
}