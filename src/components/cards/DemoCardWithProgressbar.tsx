import { DemoLinearProgressBar } from "../progressbar/DemoLinearProgressBar";
import { AnimatePresence, motion } from "framer-motion";
import { DemoCardHeader, type DemoCardHeaderKeys } from "./DemoCardHeader";

export type FundKeyMap<T> = DemoCardHeaderKeys<T> & {
  status: keyof T;
  currentAmount: keyof T;
  targetAmount: keyof T;
};

interface DemoCardWithProgressbarProps<T> {
  fundsData: T[];
  keys: FundKeyMap<T>;
  status?: "completed" | "active" | "paused" | "all";
  direction?: boolean;
  haveAction?: boolean;
}

export function DemoCardWithProgressbar<T>({
  fundsData,
  keys,
  status,
  direction = true,
  haveAction = true,
}: DemoCardWithProgressbarProps<T>) {
  const onEdit = (id: string | number) => console.log("edit", id);
  const onDelete = (id: string | number) => console.log("delete", id);

  const filteredData = fundsData.filter((item) =>
    status ? item[keys.status] === status : true,
  );

  return (
    <div className="flex flex-col space-y-2 rounded-xl p-3 h-[50vh] overflow-y-scroll scrollbar-thin">
      <AnimatePresence mode="wait">
        {filteredData.length === 0 ? (
          <p>No data found</p>
        ) : (
          filteredData.map((item, index) => {
            const id = item[keys.id];
            const currentAmount = Number(item[keys.currentAmount]);
            const targetAmount = Number(item[keys.targetAmount]);

            return (
              <motion.div
                key={String(id ?? index)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className={`p-2 rounded-xl flex flex-col space-y-2 w-full ${
                  direction ? "ring-1 ring-(--input-border)" : ""
                }`}
              >
                <DemoCardHeader
                  itemData={item}
                  keys={{
                    id: keys.id,
                    name: keys.name,
                    targetDate: keys.targetDate,
                  }}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  direction={direction}
                  haveAction={haveAction}
                />

                <DemoLinearProgressBar
                  currentAmount={currentAmount}
                  targetAmount={targetAmount}
                  showLabel={`$${currentAmount} of $${targetAmount}`}
                />
              </motion.div>
            );
          })
        )}
      </AnimatePresence>
    </div>
  );
}
