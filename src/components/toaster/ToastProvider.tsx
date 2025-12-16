import type React from "react";
import { useCallback, useState } from "react";
import { ToastContext } from "./toastContext";

interface Toast {
  id: number;
  message: string;
  type: "success" | "error" | "info";
  duration: number;
  hiding: boolean;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: string, type: "success" | "error" | "info" = "info") => {
      const id = Date.now();
      const duration = Math.min(Math.max(message.length * 10, 1500), 5000);

      setToasts((prev) => [
        ...prev,
        { id, message, type, duration, hiding: false },
      ]);

      // Start fade out animation first
      setTimeout(() => {
        setToasts((prev) =>
          prev.map((t) => (t.id === id ? { ...t, hiding: true } : t))
        );
      }, duration - 3000); // last 300ms = fade out

      // Remove toast completely
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`toast ${t.type} ${
              t.hiding ? "hide" : ""
            } tracking-wider`}
            style={{ animationDuration: `${t.duration}ms` }}
          >
            {t.message}

            <div
              className="toast-progress"
              style={{ animationDuration: `${t.duration}ms` }}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
