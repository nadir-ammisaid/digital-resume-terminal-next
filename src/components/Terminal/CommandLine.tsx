interface CommandLineProps {
  command: string;
}

export default function CommandLine({ command }: CommandLineProps) {
  return (
    <div className="flex items-center gap-2 text-terminal-text">
      <span className="text-terminal-green font-semibold">
        visitor@nadir-cv:~$
      </span>
      <span>{command}</span>
    </div>
  );
}
