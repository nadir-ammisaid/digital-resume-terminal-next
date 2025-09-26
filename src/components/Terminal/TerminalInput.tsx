import { KeyboardEvent, forwardRef } from "react";

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onHistoryUp: () => void;
  onHistoryDown: () => void;
  onAutocomplete: () => void;
  disabled?: boolean;
}

const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  (
    {
      value,
      onChange,
      onSubmit,
      onHistoryUp,
      onHistoryDown,
      onAutocomplete,
      disabled,
    },
    ref
  ) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      switch (e.key) {
        case "Enter":
          e.preventDefault();
          onSubmit();
          break;
        case "ArrowUp":
          e.preventDefault();
          onHistoryUp();
          break;
        case "ArrowDown":
          e.preventDefault();
          onHistoryDown();
          break;
        case "Tab":
          e.preventDefault();
          onAutocomplete();
          break;
        case "l":
          if (e.ctrlKey) {
            e.preventDefault();
          }
          break;
        case "c":
          if (e.ctrlKey) {
            e.preventDefault();
          }
          break;
      }
    };

    return (
      <div className="flex items-center" style={{ margin: "10px 0" }}>
        <span
          className="prompt font-semibold"
          style={{ color: "var(--terminal-green)", marginRight: "10px" }}
        >
          visitor@nadir-cv:~$
        </span>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none font-mono flex-1"
          style={{
            color: "var(--terminal-white)",
            fontFamily: "inherit",
            fontSize: "inherit",
          }}
          autoComplete="off"
          spellCheck="false"
          disabled={disabled}
          autoFocus
          placeholder=""
        />
        <span className="cursor" />
      </div>
    );
  }
);

TerminalInput.displayName = "TerminalInput";

export default TerminalInput;
