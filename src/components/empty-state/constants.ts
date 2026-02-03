import { FaFileCircleXmark } from "react-icons/fa6";
import { LuFileSearch2 } from "react-icons/lu";
import { LuBellDot } from "react-icons/lu";
import type { EmptyStatus, StateConfig } from "../../features/type/User";

export const STATUS_CONFIG: Record<EmptyStatus, StateConfig> = {
  search: {
    icon: FaFileCircleXmark,
    title: "No results found",
    description:
      "Try adjusting your search or filters to find what you’re looking for.",
  },
  file: {
    icon: LuFileSearch2,
    title: "No items yet",
    description:
      "It looks like your gallery is empty. Start adding some photos!",
  },
  notification: {
    icon: LuBellDot,
    title: "All caught up!",
    description: "Check back later for new updates and alerts.",
  },
};
