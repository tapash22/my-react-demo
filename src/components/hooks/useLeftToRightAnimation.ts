import type { Plugin, Chart as ChartJS } from "chart.js";

// Extend Chart type to store progress
interface ChartWithProgress extends ChartJS<"line"> {
  $clipProgress?: number;
}

export function useLeftToRightAnimation(speed = 8): Plugin<"line"> {
  return {
    id: "leftToRight",
    beforeDatasetDraw(chart) {
      const chartTyped = chart as ChartWithProgress;
      const ctx = chartTyped.ctx;
      const area = chartTyped.chartArea;
      if (!area) return;

      if (chartTyped.$clipProgress === undefined) chartTyped.$clipProgress = 0;

      // Increase progress (pixels) each frame
      chartTyped.$clipProgress = Math.min(
        area.right,
        chartTyped.$clipProgress + speed,
      );

      // Clip only along X-axis (left → right)
      ctx.save();
      ctx.beginPath();
      ctx.rect(
        area.left,
        area.top,
        chartTyped.$clipProgress - area.left,
        area.bottom - area.top,
      );
      ctx.clip();
    },
    afterDatasetDraw(chart) {
      (chart as ChartWithProgress).ctx.restore();
    },
  };
}
