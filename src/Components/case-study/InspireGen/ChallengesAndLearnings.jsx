export default function ChallengesAndLearnings() {
  return (
    <section id="overview" className="pt-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900">
        Challenges & Technical Learnings
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-red-100 p-10 md:p-12">
          <h3 className="text-3xl font-bold mb-6 text-red-700">Key Challenges</h3>
          <ul className="space-y-5 text-gray-700 text-lg leading-relaxed list-disc list-inside">
            <li>JSON Instability</li>
            <li>API Variations</li>
            <li>Template Mismatch</li>
            <li>Key Inconsistency</li>
            <li>Auth Handling</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-10 md:p-12">
          <h3 className="text-3xl font-bold mb-6 text-emerald-700">Technical Learnings</h3>
          <ul className="space-y-5 text-gray-700 text-lg leading-relaxed list-disc list-inside">
            <li>Schema Prompts</li>
            <li>Unified Wrappers</li>
            <li>Modular Templates</li>
            <li>Editable Blocks</li>
            <li>Output Control</li>
          </ul>
        </div>
      </div>
    </section>
  );
}