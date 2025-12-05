import React from "react";
import { ChevronRight } from "lucide-react";

export default function ArrowConnector() {
  return (
    <div className="flex justify-center my-8">
      <ChevronRight size={36} className="text-emerald-400 animate-pulse drop-shadow-lg" />
    </div>
  );
}