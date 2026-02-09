import { FUNDS_DATA } from "../../store/budget-data";
import { DemoLinearProgressBar } from "../progressbar/DemoLinearProgressBar";
import { AnimatePresence, motion } from "framer-motion";
import { DemoCardHeader } from "./DemoCardHeader";

interface DemoCardWithProgressbarProps {
  status?: string;
  fundsData?: typeof FUNDS_DATA;
  direction?: boolean;
}

export function DemoCardWithProgressbar({
  status,
  fundsData = FUNDS_DATA,
  direction = true,
}: DemoCardWithProgressbarProps) {
  const onEdit = (id: number) => {
    console.log("edit", id);
  };
  const onDelete = (id: number) => {
    console.log("delete", id);
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
    <div className="flex flex-col space-y-2 rounded-xl p-2 h-[50vh] overflow-y-scroll scrollbar-thin">
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
              className={`p-2 rounded-xl flex flex-col space-y-2 w-full h-full ${direction === true ? "ring-1 ring-(--input-border)" : "ring-0"}`}
            >
              {/* top part of card */}

              {/* left side */}
              <DemoCardHeader
                itemData={item}
                onEdit={onEdit}
                onDelete={onDelete}
                direction={direction}
              />
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
