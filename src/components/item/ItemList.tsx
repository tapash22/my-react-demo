import type { Item } from "../../reducer/itemreducer";

interface ItemListProps {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: number) => void;
}

export default function ItemList({ items, onEdit, onDelete }: ItemListProps) {
  return (
    <div className="block w-full h-full p-5">
      <h3 className="flex justify-center items-center text-2xl font-bold tracking-wide py-3 underline underline-offset-8 decoration-blue-500">
        Item List
      </h3>
      <ul className="block list-none">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`
                    flex items-center w-full p-4 transition-transform duration-200 ease-in-out 
                    ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} 
                    hover:shadow-lg 
                    rounded-md mb-2
                `}
          >
            <div className="flex-8 flex flex-wrap gap-2 text-lg font-normal">
              {item.id} - {item.name} - {item.age} - {item.email} - {item.phone}{" "}
              - {item.address}
            </div>

            <div className="flex-2 flex justify-end gap-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
