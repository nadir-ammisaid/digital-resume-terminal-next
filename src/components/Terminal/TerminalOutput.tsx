import { motion } from "framer-motion";
import { TerminalOutput as TerminalOutputType } from "@/lib/types";
import { personalData } from "@/lib/data";

interface TerminalOutputProps {
  outputs: TerminalOutputType[];
}

export default function TerminalOutput({ outputs }: TerminalOutputProps) {
  return (
    <div className="terminal-output" style={{ marginBottom: "20px" }}>
      {/* ASCII Art - exact styling from HTML */}
      <pre
        className="ascii-art"
        style={{
          color: "#00ff00",
          fontSize: "10px",
          lineHeight: "1.2",
          marginBottom: "20px",
          whiteSpace: "pre",
        }}
      >
        {personalData.asciiArt}
      </pre>

      {/* Welcome message - exact styling from HTML */}
      <div
        className="output"
        style={{ color: "#8b8bb8", margin: "10px 0", lineHeight: "1.6" }}
      >
        <span
          className="highlight"
          style={{ color: "#00ff00", fontWeight: "bold" }}
        >
          Welcome to Nadir's Interactive Resume v{personalData.config.version}
        </span>
        <br />
        <span className="info" style={{ color: "#5bc0de" }}>
          Full-Stack Developer | TypeScript | React | Node.js
        </span>
        <br />
        <br />
        Type{" "}
        <span
          className="highlight"
          style={{ color: "#00ff00", fontWeight: "bold" }}
        >
          'help'
        </span>{" "}
        to see available commands.
        <br />
        Type{" "}
        <span
          className="highlight"
          style={{ color: "#00ff00", fontWeight: "bold" }}
        >
          'start'
        </span>{" "}
        for a quick introduction.
      </div>

      {/* Command outputs */}
      {outputs.map((output) => (
        <motion.div
          key={output.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {output.type === "command" && (
            <div
              className="command-line"
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <span
                className="prompt"
                style={{ color: "#00ff00", marginRight: "10px" }}
              >
                visitor@nadir-cv:~$
              </span>
              <span className="typed-text" style={{ color: "#ffffff" }}>
                {output.content}
              </span>
            </div>
          )}

          {output.type === "result" && (
            <div
              className="output"
              style={{ color: "#8b8bb8", margin: "10px 0", lineHeight: "1.6" }}
            >
              <pre
                dangerouslySetInnerHTML={{ __html: output.content }}
                style={{
                  fontFamily: '"Fira Code", "Courier New", monospace',
                  fontSize: "inherit",
                  margin: 0,
                  whiteSpace: "pre-wrap",
                }}
              />
            </div>
          )}

          {output.type === "error" && (
            <div
              className="output error"
              style={{ color: "#ff5f56", margin: "10px 0", lineHeight: "1.6" }}
            >
              <pre
                dangerouslySetInnerHTML={{ __html: output.content }}
                style={{
                  fontFamily: '"Fira Code", "Courier New", monospace',
                  fontSize: "inherit",
                  margin: 0,
                  whiteSpace: "pre-wrap",
                }}
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
