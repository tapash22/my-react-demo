import React from "react";
import { DemoButton } from "../../components/button/DemoButton";

export function Modal({
  title = "",
  open,
  children,
  onClose,
  showBottom,
  classTag = "",
}: {
  title?: string;
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  showBottom?: boolean;
  classTag?: string;
}) {
  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex justify-center items-center z-50 ${classTag}`}
      onClick={onClose}
    >
      <div
        className="bg-(--surface) p-0 border-(--card-shadow) w-[400px] text-center rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-(--input-border)">
          {title && (
            <h2 className="text-lg font-medium tracking-wide text-(--foreground)">
              {title}
            </h2>
          )}
        </div>

        <div className="flex justify-center items-center p-4 border-b border-(--input-border)">
          {children}
        </div>
        {/* Optional Close Button */}
        <div className="flex justify-end items-center p-2">
          {showBottom && (
            <DemoButton
              classTag="py-1 px-2 text-sm font-medium traking-wide rounded-lg ring-1 ring-(--input-border)"
              onClick={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}
