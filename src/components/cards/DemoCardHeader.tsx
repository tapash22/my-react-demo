import { FaPen, FaTrash } from "react-icons/fa";
import { DemoIcon } from "../common-property/DemoIcon";
import { getIcon } from "../../store/budget-data";

export type DemoCardHeaderKeys<T> = {
  id: keyof T;
  name: keyof T;
  targetDate: keyof T;
};

interface DemoCardHeaderProps<T> {
  itemData: T;
  keys: DemoCardHeaderKeys<T>;
  onEdit: (id: string | number) => void;
  onDelete: (id: string | number) => void;
  haveAction?: boolean;
  direction?: boolean;
}

export function DemoCardHeader<T>({
  itemData,
  keys,
  onEdit,
  onDelete,
  haveAction = true,
  direction = true,
}: DemoCardHeaderProps<T>) {
  const id = itemData[keys.id] as unknown as string;
  const name = itemData[keys.name] as unknown as string;
  const targetDate = itemData[keys.targetDate] as unknown as string;

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        {direction ? (
          <div className="p-2 bg-(--surface) h-12 w-12 rounded-lg flex justify-center items-center">
            <DemoIcon icon={getIcon(name)} size={16} />
          </div>
        ) : (
          <DemoIcon icon={getIcon(name)} size={12} />
        )}

        <div className="flex justify-start items-center gap-3">
          <div
            className={`${direction ? "block space-y-2" : "flex justify-between items-center"}`}
          >
            <p
              className={`${direction ? "text-lg" : "text-sm"} font-semibold text-(--foreground)`}
            >
              {name}
            </p>
            {direction && (
              <p className="text-sm font-light text-(--muted)">
                Target: {targetDate}
              </p>
            )}
          </div>
        </div>
      </div>

      {haveAction && (
        <div className="flex justify-end items-center gap-3">
          <DemoIcon icon={FaTrash} size={18} onClick={() => onDelete(id)} />
          <DemoIcon icon={FaPen} size={18} onClick={() => onEdit(id)} />
        </div>
      )}
    </div>
  );
}
