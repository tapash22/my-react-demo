import type { Plugin } from "chart.js";
import { cssVar } from "../../utils/cssVar";
import type { DoughnutChartOptions } from "../../assets/type/budget-type";

type FadePhase = "idle" | "fadeOut" | "delay" | "fadeIn";

let phase: FadePhase = "idle";
let alpha = 1;
let scale = 1;
let startTime = 0;

let prevTotal: number | null = null;
let prevTitle: string | null = null;

/* ---------- CONFIG ---------- */
const FADE_OUT_DURATION = 300; // ms
const DELAY_DURATION = 200;
const FADE_IN_DURATION = 400;
const SCALE_MIN = 0.8; // scale down
const SCALE_MAX = 1; // normal scale

const animateTimeline = () => {
  const now = performance.now();
  const elapsed = now - startTime;

  switch (phase) {
    case "fadeOut":
      alpha = Math.max(1 - elapsed / FADE_OUT_DURATION, 0);
      scale = SCALE_MIN + alpha * (SCALE_MAX - SCALE_MIN); // shrink
      if (elapsed >= FADE_OUT_DURATION) {
        phase = "delay";
        startTime = now;
      }
      break;

    case "delay":
      alpha = 0;
      scale = SCALE_MIN;
      if (elapsed >= DELAY_DURATION) {
        phase = "fadeIn";
        startTime = now;
      }
      break;

    case "fadeIn":
      alpha = Math.min(elapsed / FADE_IN_DURATION, 1);
      scale = SCALE_MIN + alpha * (SCALE_MAX - SCALE_MIN); // grow
      if (elapsed >= FADE_IN_DURATION) {
        alpha = 1;
        scale = SCALE_MAX;
        phase = "idle";
      }
      break;
  }

  return { alpha, scale };
};

export const centerTextPlugin: Plugin<"doughnut"> = {
  id: "centerText",
  afterDraw(chart) {
    const { ctx, chartArea, options } = chart;
    if (!chartArea) return;

    const { left, right, top, bottom } = chartArea;
    const centerX = (left + right) / 2;
    const centerY = (top + bottom) / 2;

    // Read total
    const opts = options as DoughnutChartOptions;
    const total = opts.centerTotal ?? 0;

    // Read title text safely
    const titleText =
      typeof options.plugins?.title?.text === "string"
        ? options.plugins.title.text
        : "";

    /* ---------- DETECT CHANGE ---------- */
    if (total !== prevTotal || titleText !== prevTitle) {
      prevTotal = total;
      prevTitle = titleText;

      phase = "fadeOut";
      startTime = performance.now();
    }

    /* ---------- UPDATE ANIMATION ---------- */
    // const opacity = animateTimeline();
    const { alpha, scale } = animateTimeline();

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    /* ---------- TITLE (TOP) ---------- */
    ctx.globalAlpha = alpha;
    ctx.font = `${18 * scale}px sans-serif`;
    ctx.fillStyle = cssVar("--muted");
    ctx.letterSpacing = "1px";
    ctx.fillText(titleText, centerX, centerY - 22);

    /* ---------- TOTAL (CENTER) ---------- */
    ctx.font = `bold ${24 * scale}px sans-serif`;
    ctx.fillStyle = cssVar("--muted");
    ctx.fillText(`$${total.toLocaleString()}`, centerX, centerY + 12);

    ctx.restore();
    if (phase !== "idle") {
      requestAnimationFrame(() => chart.draw());
    }
  },
};
