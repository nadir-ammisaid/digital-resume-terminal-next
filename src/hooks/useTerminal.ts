import { useState, useCallback, useRef, useEffect } from "react";
import { CommandHistory, TerminalOutput } from "@/lib/types";
import { useLocalStorage } from "./useLocalStorage";
import { generateUniqueId } from "@/lib/utils";

export function useTerminal() {
  const [output, setOutput] = useState<TerminalOutput[]>([]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useLocalStorage<string[]>(
    "terminal-history",
    []
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const addOutput = useCallback(
    (content: string, type: "command" | "result" | "error" = "result") => {
      const newOutput: TerminalOutput = {
        id: generateUniqueId(),
        content,
        type,
        timestamp: Date.now(),
      };
      setOutput((prev) => [...prev, newOutput]);
    },
    []
  );

  const clearOutput = useCallback(() => {
    setOutput([]);
  }, []);

  const addToHistory = useCallback(
    (command: string) => {
      if (command && commandHistory[commandHistory.length - 1] !== command) {
        setCommandHistory((prev) => [...prev.slice(-99), command]);
      }
      setHistoryIndex(-1);
    },
    [commandHistory, setCommandHistory]
  );

  const navigateHistory = useCallback(
    (direction: "up" | "down") => {
      if (commandHistory.length === 0) return;

      if (direction === "up") {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex] || "");
      } else {
        if (historyIndex === -1) return;
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    },
    [commandHistory, historyIndex]
  );

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      const terminalBody = document.querySelector("[data-terminal-body]");
      if (terminalBody) {
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
    }, 100);
  }, []);

  // Focus automatique après chaque output
  useEffect(() => {
    scrollToBottom();
    focusInput();
  }, [output, scrollToBottom, focusInput]);

  // Focus initial
  useEffect(() => {
    const timer = setTimeout(() => {
      focusInput();
    }, 500);
    return () => clearTimeout(timer);
  }, [focusInput]);

  return {
    output,
    input,
    setInput,
    isProcessing,
    setIsProcessing,
    historyIndex,
    commandHistory,
    inputRef,
    addOutput,
    clearOutput,
    addToHistory,
    navigateHistory,
    focusInput,
    scrollToBottom,
  };
}
