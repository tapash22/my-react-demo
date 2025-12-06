import type { Item } from "../../reducer/itemreducer";
import { FaPen, FaTrash } from "react-icons/fa";

interface ItemListProps {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: number) => void;
}

export default function ItemList({ items, onEdit, onDelete }: ItemListProps) {
  const tableHeaders: Record<string, string> = {
    id: "ID",
    name: "Name",
    age: "Age",
    email: "Email",
    phone: "Phone",
    address: "Address",
  };

  return (
    <div className="p-5 w-full bg-gray-100 rounded-2xl space-y-4">
      <h3 className="text-xl font-bold text-center p-4 uppercase tracking-wider bg-gray-50 rounded-2xl ">
        Item List
      </h3>

      <div className=" w-full overflow-scrollp-3 bg-transparent ">
        <table className="w-full p-0 m-0  rounded-3xl overflow-scroll">
          <thead className="bg-gray-50 ">
            <tr>
              {Object.keys(tableHeaders).map((key) => (
                <th
                  key={key}
                  className=" text-center text-xl font-bold tracking-wide p-5"
                >
                  {tableHeaders[key]}
                </th>
              ))}
              <th className="text-center text-xl font-bold tracking-wide">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                } hover:bg-blue-200 transition-colors duration-200 cursor-pointer border-b-2 border-white`}
              >
                {Object.keys(tableHeaders).map((key) => (
                  <td
                    key={key}
                    className="p-4 text-center text-lg font-normal tracking-wide"
                  >
                    {item[key as keyof typeof item]}
                  </td>
                ))}
                <td className="p-4 flex justify-between text-center tracking-wide font-normal text-sm ">
                  <FaPen size={20} color="gray" onClick={() => onEdit(item)} />
                  <FaTrash
                    size={20}
                    color="red"
                    onClick={() => onDelete(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
