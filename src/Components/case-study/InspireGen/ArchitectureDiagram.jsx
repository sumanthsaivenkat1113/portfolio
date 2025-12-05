import React from "react";
import ArchitectureNode from "./shared/ArchitectureNode";
import FlowConnector from "./shared/FlowConnector";
import { User, Brain, Image, LayoutTemplate } from "lucide-react";

export default function ArchitectureDiagram() {
  return (
    <section className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12">
      <h2 className="text-4xl font-extrabold text-center mb-16">System Architecture Diagram</h2>
      <div className="max-w-4xl mx-auto">
        <ArchitectureNode icon={User} title="1. Client Frontend (React/TS)" subtitle="User Input → Prompt → Promise.all()" />
        <FlowConnector label="Concurrent Secure Calls" />
        <div className="grid grid-cols-2 gap-12">
          <div>
            <ArchitectureNode icon={Brain} title="2. LLM Provider" subtitle="Outputs strict JSON payload" />
            <p className="text-center text-sm text-gray-500 mt-4 font-mono">{`{JSON Schema}`}</p>
          </div>
          <div>
            <ArchitectureNode icon={Image} title="3. Image API" subtitle="Returns image URLs" />
            <p className="text-center text-sm text-gray-500 mt-4 font-mono">[URL, URL, ...]</p>
          </div>
        </div>
        <FlowConnector label="Merge Response Data" />
        <ArchitectureNode icon={LayoutTemplate} title="4. Template Rendering" subtitle="Final render using unified data" className="bg-emerald-50 border-emerald-200 shadow-xl" />
      </div>
    </section>
  );
}