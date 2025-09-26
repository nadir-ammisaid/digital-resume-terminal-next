"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useTerminal } from "@/hooks/useTerminal";
import { useCommands } from "@/hooks/useCommands";
import TerminalHeader from "./TerminalHeader";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";

export default function Terminal() {
  const {
    output,
    input,
    setInput,
    isProcessing,
    setIsProcessing,
    inputRef,
    addOutput,
    clearOutput,
    addToHistory,
    navigateHistory,
    focusInput,
  } = useTerminal();

  const { executeCommand, getAutocompleteSuggestions } = useCommands();

  const handleSubmit = useCallback(async () => {
    if (!input.trim() || isProcessing) return;

    const trimmedInput = input.trim();
    addToHistory(trimmedInput);
    addOutput(trimmedInput, "command");
    setInput("");
    setIsProcessing(true);

    try {
      const [commandName, ...args] = trimmedInput.toLowerCase().split(" ");
      const result = await executeCommand(commandName, args);

      if (result === "CLEAR_TERMINAL") {
        clearOutput();
      } else if (result) {
        addOutput(result, "result");
      }
    } catch (error) {
      addOutput(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        "error"
      );
    } finally {
      setIsProcessing(false);
    }
  }, [
    input,
    isProcessing,
    addToHistory,
    addOutput,
    setInput,
    setIsProcessing,
    executeCommand,
    clearOutput,
  ]);

  const handleAutocomplete = useCallback(() => {
    if (!input.trim()) return;

    const suggestions = getAutocompleteSuggestions(input.toLowerCase());

    if (suggestions.length === 1) {
      setInput(suggestions[0]);
    } else if (suggestions.length > 1) {
      const suggestionsList = suggestions.join(", ");
      addOutput(`Suggestions: ${suggestionsList}`, "result");
    }
  }, [input, getAutocompleteSuggestions, setInput, addOutput]);

  const handleClear = useCallback(() => {
    clearOutput();
  }, [clearOutput]);

  const handleMinimize = useCallback(() => {
    addOutput("Terminal minimisé (simulation)", "result");
  }, [addOutput]);

  const handleMaximize = useCallback(() => {
    addOutput("Mode plein écran activé/désactivé", "result");
  }, [addOutput]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Ne pas refocuser si on clique sur un lien ou un bouton
      if (target.tagName === "A" || target.tagName === "BUTTON") {
        return;
      }
      focusInput();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus sur l'input quand on tape quelque chose
      if (!isProcessing && e.key.length === 1) {
        focusInput();
      }
    };

    document.addEventListener("click", handleGlobalClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [focusInput, isProcessing]);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full rounded-lg overflow-hidden"
      style={{
        maxWidth: "900px",
        backgroundColor: "var(--terminal-secondary)",
        boxShadow: "0 20px 60px rgba(0, 255, 0, 0.3)",
        border: "1px solid rgba(0, 255, 0, 0.2)",
      }}
    >
      <TerminalHeader
        onClear={handleClear}
        onMinimize={handleMinimize}
        onMaximize={handleMaximize}
      />

      <div
        data-terminal-body
        className="overflow-y-auto font-mono text-sm scrollbar-thin"
        style={{
          padding: "20px",
          minHeight: "500px",
          maxHeight: "600px",
          backgroundColor: "var(--terminal-secondary)",
        }}
      >
        <TerminalOutput outputs={output} />

        <TerminalInput
          ref={inputRef}
          value={input}
          onChange={setInput}
          onSubmit={handleSubmit}
          onHistoryUp={() => navigateHistory("up")}
          onHistoryDown={() => navigateHistory("down")}
          onAutocomplete={handleAutocomplete}
          disabled={isProcessing}
        />
      </div>
    </motion.div>
  );
}
