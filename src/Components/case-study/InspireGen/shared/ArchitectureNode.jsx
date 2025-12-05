export default function ArchitectureNode({
  icon: Icon,
  title,
  subtitle,
  className = "",
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-gray-200 shadow-md transition-all hover:shadow-xl ${className}`}
    >
      <div className="mb-3 p-3 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 text-center">{title}</h3>
      {subtitle && (
        <p className="text-sm text-gray-500 mt-1 text-center max-w-xs">{subtitle}</p>
      )}
    </div>
  );
}