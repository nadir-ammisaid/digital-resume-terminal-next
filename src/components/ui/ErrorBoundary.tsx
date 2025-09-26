"use client";

import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Terminal error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-terminal-bg flex items-center justify-center p-4">
          <div className="bg-terminal-secondary rounded-lg p-6 max-w-md text-center border border-terminal-error">
            <h2 className="text-terminal-error text-xl font-mono mb-4">
              Terminal Error
            </h2>
            <p className="text-terminal-text mb-4">
              Une erreur s'est produite lors du chargement du terminal.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-terminal-error text-white px-4 py-2 rounded font-mono hover:bg-opacity-80 transition-colors"
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
