import type { IconType } from "react-icons";
import { DemoIcon } from "../common-property/DemoIcon";

interface DemoAvatarProps {
  image?: string;
  icon?: IconType;
  avatorColor?: string;
  avatorBackground?: string;
  size?: number;
  iconSize?: number;
}
export function DemoAvatar({
  image,
  icon,
  avatorColor = "text-(forground)",
  avatorBackground = "bg-(--surface)",
  iconSize = 16,
}: DemoAvatarProps) {
  return (
    <div
      className={`${avatorBackground} ${avatorColor}  ${image ? " ring-1 ring-(--card-border)" : "ring-0"} p-3 object-center rounded-full  shadow-(--shadow-card) flex justify-center items-center`}
    >
      {image && <img src={image} className="bg-cover bg-center p-2 " />}
      {icon && <DemoIcon icon={icon} size={iconSize} />}
    </div>
  );
}
