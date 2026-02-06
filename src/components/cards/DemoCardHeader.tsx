import { FaPen, FaTrash } from "react-icons/fa";
import { DemoIcon } from "../common-property/DemoIcon";
import { getIcon } from "../../store/budget-data";

interface BaseItem {
  id: number;
  name: string;
  targetDate: string;
}
interface DemoCardHeaderProps<T extends BaseItem> {
  itemData: T;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  direction?: boolean;
}
export function DemoCardHeader<T extends BaseItem>({
  itemData,
  onEdit,
  onDelete,
  direction = true,
}: DemoCardHeaderProps<T>) {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center space-x-2">
        {direction === true ? (
          <div className="p-2 bg-(--surface) h-12 w-12 rounded-lg flex justify-center items-center">
            <DemoIcon icon={getIcon(itemData.name)} size={16} />
          </div>
        ) : (
          <DemoIcon icon={getIcon(itemData.name)} size={12} />
        )}

        <div className="flex justify-start items-center gap-3">
          <div
            className={`${direction === true ? "block space-y-2 " : " flex justify-between items-center"}`}
          >
            <p
              className={`${direction === true ? "text-lg" : "text-sm"} font-semibold text-(--foreground)`}
            >
              {itemData.name}
            </p>
            {direction === true && (
              <p className="text-sm font-light text-(--muted) space-x-1">
                Targer: {itemData.targetDate}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* left side end */}

      {/* right side */}
      {direction === true && (
        <div className="flex justify-end items-center gap-3">
          <DemoIcon
            icon={FaTrash}
            size={18}
            onClick={() => onEdit(itemData.id)}
          />
          <DemoIcon
            icon={FaPen}
            size={18}
            onClick={() => onDelete(itemData.id)}
          />
        </div>
      )}
      {/* right side end */}
    </div>
  );
}
