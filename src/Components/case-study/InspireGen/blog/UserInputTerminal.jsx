import Typewriter from "../shared/Typewriter";
const inputs = [
  "3 things to do in India",
  "How to master React hooks",
  "The history of quantum computing",
];

export default function UserInputTerminal() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative bg-gradient-to-br from-gray-900 to-black/95 backdrop-blur-2xl rounded-2xl p-8 ring-1 ring-indigo-500/30 shadow-2xl border border-indigo-500/20">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="inline-block w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse shadow-lg shadow-indigo-500/50"></span>
            A. User Input Simulation
          </h4>
          <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full backdrop-blur">
            Live Typing
          </span>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-xl blur-xl"></div>
          <div className="relative bg-black/60 backdrop-blur-xl rounded-xl p-6 border border-indigo-500/30 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-500 text-sm font-medium">inspiregen@terminal:~$</span>
            </div>
            <div className="font-mono text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
              <Typewriter texts={inputs} typingSpeed={80} deletingSpeed={40} delay={2800} />
              <span className="inline-block w-1 h-8 ml-1 bg-gradient-to-b from-indigo-400 to-purple-500 animate-blink"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}