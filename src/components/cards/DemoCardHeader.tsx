import { FaPen, FaTrash } from "react-icons/fa";
import { DemoIcon } from "../common-property/DemoIcon";
import { getIcon } from "../../utils/iconHelper";

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
          <div className="p-3 bg-(--surface) shadow-(--shadow) h-auto w-auto rounded-lg flex justify-center items-center ring-2 ring-(--input-border)">
            <DemoIcon
              icon={getIcon(name)}
              size={20}
              color="var(--foreground)"
            />
          </div>
        ) : (
          <DemoIcon icon={getIcon(name)} size={20} color="var(--muted)" />
        )}
        <div
          className={`${direction ? "flex flex-col" : "flex justify-between items-center"}`}
        >
          <p className={` text-sm font-medium text-(--foreground)`}>{name}</p>
          {direction && (
            <p className="text-sm font-medium text-(--muted)">
              Target: {targetDate}
            </p>
          )}
        </div>
      </div>

      {haveAction && (
        <div className="flex justify-end items-center gap-3">
          <DemoIcon
            icon={FaTrash}
            size={18}
            onClick={() => onDelete(id)}
            color="var(--surface)"
          />
          <DemoIcon icon={FaPen} size={18} onClick={() => onEdit(id)} />
        </div>
      )}
    </div>
  );
}
