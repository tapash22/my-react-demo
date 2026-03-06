import type { SizeType } from "../features/type/User";

/**
 * Returns a Tailwind CSS width class string based on the modal size.
 * - tiny: small modal
 * - small: slightly larger
 * - medium: default modal
 * - large: wide modal
 *
 * Uses responsive classes for mobile and desktop:
 * - w-full on mobile
 * - sm:w-[Xvw] with sm:max-w-[Ypx] on larger screens
 */
export const getModalWidthClass = (size: SizeType): string => {
  const widthMap: Record<SizeType, string> = {
    tiny: "w-full sm:w-[30vw] sm:max-w-[300px]",
    small: "w-full sm:w-[40vw] sm:max-w-[400px]",
    medium: "w-full sm:w-[50vw] sm:max-w-[500px]",
    large: "w-full sm:w-[70vw] sm:max-w-[700px]",
  };
  return widthMap[size];
};
