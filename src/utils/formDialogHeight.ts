import React from "react";
import { type SizeType } from "../features/type/User";

/**
 * Recursively count form elements (input, textarea, select, checkbox)
 */

//count div also
// export const countFormElementsIncludingAll = (
//   children: React.ReactNode,
// ): number => {
//   let count = 0;

//   React.Children.forEach(children, (child) => {
//     if (!React.isValidElement(children)) return;

//     const element = child as React.ReactElement<{
//       children?: React.ReactNode;
//       [key: string]: unknown;
//     }>;

//     // Count all elements (inputs, selects, textareas, images, divs, etc.)
//     count += 1;

//     // Recurse into nested children
//     if (element.props?.children) {
//       count += countFormElementsIncludingAll(element.props.children);
//     }
//   });

//   return count;
// };

/**
 * Calculate dynamic modal height based on number of form elements
 */
export const calculateFormModalHeight = (
  children: React.ReactNode,
  hasSubtitle: boolean,
  sizeType?: SizeType,
): string => {
  const elementCount = countFormElementsIncludingAll(children);

  // Base height in vh for each sizeType
  const baseHeights: Record<SizeType, number> = {
    tiny: 30,
    small: 50,
    medium: 60,
    large: 80,
  };

  const SUBTITLE_VH = hasSubtitle ? 5 : 0;
  const ELEMENT_VH = 15;

  const dynamicHeight = SUBTITLE_VH + elementCount * ELEMENT_VH;
  // Final height logic:
  // - If sizeType is provided, start with its base height
  // - But always allow dynamicHeight to expand if more elements exist
  // - Cap height at 90vh to avoid overflowing the viewport
  let height: number;

  if (sizeType) {
    height = Math.max(dynamicHeight, baseHeights[sizeType]); // allow growth
  } else {
    height = dynamicHeight;
  }

  // Always cap at 90vh
  height = Math.min(height, 90);
  return `${height}vh`;
};

/**
 * Get modal width based on sizeType
 */
export const getModalWidth = (sizeType: SizeType): string => {
  const widthMap: Record<SizeType, string> = {
    tiny: "30vw",
    small: "40vw",
    medium: "50vw",
    large: "70vw",
  };
  return widthMap[sizeType];
};

// count only input, select with child, textarea

export const countFormElementsIncludingAll = (
  children: React.ReactNode,
): number => {
  let count = 0;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const element = child as React.ReactElement<{
      children?: React.ReactNode;
      [key: string]: unknown;
    }>;

    // HTML element type check
    if (typeof element.type === "string") {
      const tag = element.type;

      // Count basic form elements
      if (
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        tag === "img"
      ) {
        count += 1;
      }

      // ✅ Only cast to HTMLInputElement props if tag === "input"
      if (tag === "input") {
        const props =
          element.props as React.InputHTMLAttributes<HTMLInputElement>;
        if (props.type === "checkbox") {
          count += 1;
        }
      }
    }

    // Recurse for nested children
    if (element.props?.children) {
      count += countFormElementsIncludingAll(element.props.children);
    }
  });

  return count;
};
