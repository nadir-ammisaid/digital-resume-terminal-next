import { motion } from "framer-motion";

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-terminal-bg flex flex-col items-center justify-center z-50"
    >
      <div className="border-4 border-terminal-text border-t-terminal-green rounded-full w-12 h-12 animate-spin mb-4" />
      <p className="text-terminal-green font-mono">Initializing terminal...</p>
    </motion.div>
  );
}
