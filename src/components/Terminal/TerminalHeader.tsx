interface TerminalHeaderProps {
  onClear: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
}

export default function TerminalHeader({
  onClear,
  onMinimize,
  onMaximize,
}: TerminalHeaderProps) {
  return (
    <div
      className="px-5 py-3 flex items-center gap-2 h-12"
      style={{ backgroundColor: "var(--terminal-header)" }}
    >
      <div className="flex gap-2">
        <button
          onClick={onClear}
          className="w-3 h-3 rounded-full hover:brightness-110 transition-all duration-200 hover:scale-110"
          style={{ backgroundColor: "var(--terminal-error)" }}
          title="Fermer"
        />
        <button
          onClick={onMinimize}
          className="w-3 h-3 rounded-full hover:brightness-110 transition-all duration-200 hover:scale-110"
          style={{ backgroundColor: "var(--terminal-warning)" }}
          title="Minimiser"
        />
        <button
          onClick={onMaximize}
          className="w-3 h-3 rounded-full hover:brightness-110 transition-all duration-200 hover:scale-110"
          style={{ backgroundColor: "#27c93f" }}
          title="Agrandir"
        />
      </div>
      <div className="flex-1 text-center">
        <span
          className="text-sm font-mono"
          style={{ color: "var(--terminal-text)" }}
        >
          nadir@portfolio: ~/resume
        </span>
      </div>
    </div>
  );
}
