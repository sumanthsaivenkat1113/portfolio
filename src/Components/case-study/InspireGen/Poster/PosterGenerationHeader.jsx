import React from "react";
import { Megaphone } from "lucide-react";

export default function PosterGenerationHeader() {
  return (
    <div className="flex items-center gap-4 mb-8 pb-4 border-b border-emerald-200">
      <Megaphone size={36} className="text-emerald-600" />
      <h3 className="text-3xl font-bold text-gray-900">3. Multi-Modal Poster Generation</h3>
    </div>
  );
}