export default function FlowConnector({ label }) {
  return (
    <div className="flex flex-col items-center my-6">
      <div className="w-0.5 h-12 bg-gradient-to-b from-indigo-300 to-purple-400"></div>
      {label && (
        <span className="mt-2 text-xs font-semibold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full shadow-sm">
          {label}
        </span>
      )}
      <div className="w-0.5 h-12 bg-gradient-to-b from-purple-400 to-emerald-400"></div>
    </div>
  );
}