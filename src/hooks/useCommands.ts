import { useCallback } from "react";
import { commands, getCommandSuggestions } from "@/lib/commands";

export function useCommands() {
  const executeCommand = useCallback(
    async (commandName: string, args: string[] = []): Promise<string> => {
      try {
        if (commands[commandName]) {
          return await commands[commandName].execute(args);
        } else {
          return commands.unknown.execute([commandName]);
        }
      } catch (error) {
        console.error("Command execution error:", error);
        return `<span class="text-terminal-error">Error executing command: ${
          error instanceof Error ? error.message : "Unknown error"
        }</span>`;
      }
    },
    []
  );

  const getAutocompleteSuggestions = useCallback((input: string): string[] => {
    return getCommandSuggestions(input);
  }, []);

  const getAllCommands = useCallback(() => {
    return Object.keys(commands).filter((cmd) => !commands[cmd].hidden);
  }, []);

  const getCommandDescription = useCallback((commandName: string): string => {
    return commands[commandName]?.description || "Command not found";
  }, []);

  return {
    executeCommand,
    getAutocompleteSuggestions,
    getAllCommands,
    getCommandDescription,
  };
}
