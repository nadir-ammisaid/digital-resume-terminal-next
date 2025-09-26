import { motion } from "framer-motion";
import { TerminalOutput as TerminalOutputType } from "@/lib/types";
import { personalData } from "@/lib/data";

interface TerminalOutputProps {
  outputs: TerminalOutputType[];
}

export default function TerminalOutput({ outputs }: TerminalOutputProps) {
  return (
    <div className="space-y-2 mb-4">
      <pre className="text-green-400 text-xs leading-tight mb-4 overflow-x-auto whitespace-pre">
        {personalData.asciiArt}
      </pre>

      <div className="mb-4 p-3 bg-green-400/5 border-l-2 border-green-400 rounded-r">
        <span className="text-green-400 font-semibold">
          Welcome to Nadir's Interactive Resume v{personalData.config.version}
        </span>
        <br />
        <span className="text-blue-400">
          Full-Stack Developer | TypeScript | React | Node.js
        </span>
        <br />
        <br />
        Type <span className="text-green-400">'help'</span> to see available
        commands.
        <br />
        Type <span className="text-green-400">'start'</span> for a quick
        introduction.
      </div>

      {outputs.map((output) => (
        <motion.div
          key={output.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {output.type === "command" && (
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400 font-semibold">
                visitor@nadir-cv:~$
              </span>
              <span>{output.content}</span>
            </div>
          )}

          {output.type === "result" && (
            <div className="text-gray-300 whitespace-pre-wrap ml-4 pl-3 border-l border-gray-600">
              <pre className="font-mono text-sm">{output.content}</pre>
            </div>
          )}

          {output.type === "error" && (
            <div className="text-red-400 whitespace-pre-wrap ml-4 pl-3 border-l border-red-400">
              <pre className="font-mono text-sm">{output.content}</pre>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
