import { FUNDS_DATA } from "../../store/budget-data";
import { DemoLinearProgressBar } from "../progressbar/DemoLinearProgressBar";
import { FaPen, FaTrash } from "react-icons/fa";
import { DemoIcon } from "../common-property/DemoIcon";
import {
  FaShieldAlt,
  FaCar,
  FaUmbrellaBeach,
  FaHome,
  FaGraduationCap,
  FaGift,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

interface DemoCardWithProgressbarProps {
  status?: string;
  fundsData?: typeof FUNDS_DATA;
}

export function DemoCardWithProgressbar({
  status,
  fundsData = FUNDS_DATA,
}: DemoCardWithProgressbarProps) {
  const onEdit = (id: number) => {
    console.log("edit", id);
  };
  const onDelete = (id: number) => {
    console.log("delete", id);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "Emergency Fund":
        return FaShieldAlt;
      case "New Car":
        return FaCar;
      case "Vacation":
        return FaUmbrellaBeach;
      case "Home Down Payment":
        return FaHome;
      case "Education Fund":
        return FaGraduationCap;
      case "Anniversary Gift":
        return FaGift;
      default:
        return null;
    }
  };

  // Filter data based on status
  const filteredData = fundsData.filter((item) => {
    if (!item) return true;
    if (status === "completed") return item.status === "completed";
    if (status === "active") return item.status === "active";
    if (status === "paused") return item.status === "paused";
    return true;
  });
  return (
    <div className="flex flex-col space-y-3 rounded-xl p-4">
      {/* {status} */}
      <AnimatePresence mode="wait">
        {filteredData.length === 0 ? (
          <p>No Data foundes</p>
        ) : (
          filteredData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-4 rounded-xl flex flex-col space-y-2 w-full h-full ring-1 ring-blue-400"
            >
              {/* top part of card */}

              {/* left side */}
              <div className="flex justify-between items-center ">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-(--surface) h-12 w-12 rounded-lg flex justify-center items-center">
                    <DemoIcon icon={getIcon(item.name)} size={16} />
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    <div className="block p-0">
                      <p className="text-lg font-semibold text-(--foreground)">
                        {item.name}
                      </p>
                      <span className="text-sm font-light text-(--muted) space-x-1">
                        Targer: {item.targetDate}
                      </span>
                    </div>
                  </div>
                </div>
                {/* left side end */}

                {/* right side */}
                <div className="flex justify-end items-center gap-3">
                  <FaTrash
                    size={20}
                    className="text-(--muted)"
                    onClick={() => onEdit(item.id)}
                  />{" "}
                  <FaPen
                    size={20}
                    className="text-(--muted)"
                    onClick={() => onDelete(item.id)}
                  />
                </div>
                {/* right side end */}
              </div>
              {/* top part of card end */}

              {/* progressbar */}
              <DemoLinearProgressBar
                currentAmount={item.currentAmount}
                targetAmount={item.targetAmount}
                showLabel={`$${item.currentAmount} of $${item.targetAmount}`}
              />
              {/* progressbar end */}
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
}
