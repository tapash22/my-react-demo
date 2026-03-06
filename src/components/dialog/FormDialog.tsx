import { FaTimes } from "react-icons/fa";
import { calculateFormModalHeight } from "../../utils/formDialogHeight";
import { type SizeType } from "../../features/type/User";
import React from "react";
import { getModalWidthClass } from "../../utils/modalWidth";

export interface FormDialogProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  sizeType?: SizeType;
  footer?: React.ReactNode;
  columns?: number;
}

export default function FormDialog({
  open,
  onClose,
  children,
  title,
  subtitle,
  sizeType,
  footer,
  columns,
}: FormDialogProps) {
  if (!open) return null;

  // Determine grid template based on columns prop
  // const gridTemplateColumns = columns
  //   ? `repeat(${columns}, minmax(0, 1fr))`
  //   : "1fr"; // default 1 column
  const width = sizeType ? getModalWidthClass(sizeType) : "50vw";
  const height = calculateFormModalHeight(children, !!subtitle);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/30">
      <div
        className="relative w-full bg-white rounded-xl shadow-2xl transform transition-all duration-300 animate-[fadeIn_0.3s_ease,scaleIn_0.3s_ease] flex flex-col"
        style={{ width, height }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b-2 border-gray-200">
          {title && <h2 className="text-xl font-semibold">{title}</h2>} {height}
          {width}
          <FaTimes
            onClick={onClose}
            size={20}
            color="gray"
            className="cursor-pointer"
          />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 w-full">
          {/* Subtitle / confirm message */}
          {subtitle && (
            <div className="mb-4 text-center">
              <p className="tracking-wide leading-5 text-lg">
                Are you sure you want to delete{" "}
                <span className="font-bold">{subtitle}?</span>
              </p>
            </div>
          )}

          {/* Children content in grid */}
          {children && (
            <div
              className="w-full gap-4"
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              }}
            >
              {children}
            </div>
          )}
        </div>

        {/* Footer */}
        {footer && (
          <div className="border-t-2 border-gray-200 p-6 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
