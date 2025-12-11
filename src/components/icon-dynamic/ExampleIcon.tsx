import { FaHome, FaTimes, FaUser } from "react-icons/fa";

const IconList = [FaTimes, FaHome, FaUser];

export default function ExampleIcon() {
  return (
    <div className="flex gap-4">
      {IconList.map((Icon, i) => (
        <Icon key={i} size={20} className="text-red-600" />
      ))}
    </div>
  );
}
