import { motion } from "framer-motion";
import type { TooltipRenderProps } from "react-joyride";
import { DemoButton } from "../../components/button/DemoButton";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { DemoIcon } from "../../components/common-property/DemoIcon";

export function GlassTooltip({
  continuous,
  index,
  step,
  backProps,
  closeProps,
  primaryProps,
  skipProps,
  size,
}: TooltipRenderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        backdrop-blur-xl
        bg-(--surface)
        border border-(--input-border)
        shadow-2xl
        rounded-2xl
        p-6
        min-w-72
        text-(--foreground)
      "
    >
      {/* Progress */}
      <div className="flex justify-between items-center mb-4 text-sm text-(--foreground)">
        <span>
          Step {index + 1} of {size}
        </span>
        <button {...closeProps}>
          <DemoIcon icon={FaTimes} size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="text-base font-medium mb-6">{step.content}</div>

      {/* Buttons */}
      <div className="flex justify-between items-center gap-3">
        {index > 0 && (
          <DemoButton
            {...backProps}
            title="Back"
            icon={FaArrowLeft}
            widthSize="auto"
          />
        )}

        <div className="flex gap-3 ml-auto flex-wrap">
          <DemoButton {...skipProps} title="Skip" widthSize="auto" />

          <DemoButton
            {...primaryProps}
            title={continuous ? "Next" : "Finish"}
            icon={FaArrowRight}
            widthSize="auto"
            buttonColor="bg-(--surface)"
          />
        </div>
      </div>
    </motion.div>
  );
}
