import { FUNDS_DATA } from "../../store/budget-data";
import { ProgressBar } from "../progressbar/ProgressBar";
import { FaPen, FaTrash } from "react-icons/fa";

export function DemoCardWithProgressbar() {
  const onEdit = (id: number) => {
    console.log("edit", id);
  };
  const onDelete = (id: number) => {
    console.log("delete", id);
  };
  return (
    <div className="flex flex-col space-y-3 rounded-xl p-4">
      {FUNDS_DATA.map((item) => (
        <div
          className="p-4 rounded-xl flex flex-col space-y-2 w-full h-full ring-1 ring-blue-400"
          key={item.id}
        >
          {/* top part of card */}
          <div className="flex justify-between items-center ">
            <div className="block space-y-1">
              <p className="text-lg font-semibold text-(--foreground)">
                {item.name}
              </p>
              <span className="text-sm font-light text-(--muted)">
                {item.targetDate}
              </span>
            </div>
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
          </div>
          {/* top part of card end */}

          {/* progressbar */}
          <ProgressBar
            currentAmount={item.currentAmount}
            targetAmount={item.targetAmount}
          />
          {/* progressbar end */}
        </div>
      ))}
    </div>
  );
}
