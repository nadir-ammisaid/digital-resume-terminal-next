"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Terminal from "@/components/Terminal/Terminal";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "F1") {
        e.preventDefault();
      }

      if (e.key === "F5") {
        e.preventDefault();
        const confirm = window.confirm(
          "Actualiser la page ? L'historique des commandes sera perdu."
        );
        if (confirm) {
          window.location.reload();
        }
      }

      if (e.key === "F11") {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch((err) => {
            console.warn("Impossible d'activer le plein écran:", err);
          });
        } else {
          document.exitFullscreen();
        }
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Focus sur l'input quand la page redevient visible
        setTimeout(() => {
          const input = document.querySelector(
            'input[type="text"]'
          ) as HTMLInputElement;
          if (input) {
            input.focus();
          }
        }, 100);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <main
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "var(--terminal-bg)" }}
    >
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" isVisible={isLoading} />
        ) : (
          <Terminal key="terminal" />
        )}
      </AnimatePresence>
    </main>
  );
}
