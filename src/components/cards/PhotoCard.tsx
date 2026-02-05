import { type Photo } from "../../features/type/User";
import { FaPen, FaTrash } from "react-icons/fa";
import { DemoIcon } from "../common-property/DemoIcon";

interface PhotoCardProps {
  photo: Photo;
  onEdit: (photo: Photo) => void;
  onDelete?: (id: number) => void;
}
export function Photocard({ photo, onEdit, onDelete }: PhotoCardProps) {
  return (
    <div className="relative border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Thumbnail */}
      <div className="flex justify-center p-2 ">
        <img
          src={photo.thumbnailUrl}
          alt={photo.title}
          className="max-h-52 object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <h2 className="text-(--foreground) font-semibold text-lg mb-1">
          {photo.title.charAt(0).toUpperCase() + photo.title.slice(1)}
        </h2>
        <p className="text-(--foreground) text-sm break-all">
          {photo.url} | ID: {photo.id}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-2 right-2 flex gap-2">
        {onEdit && (
          <DemoIcon icon={FaPen} size={16} onClick={() => onEdit(photo)} />
        )}
        {onDelete && (
          <DemoIcon
            icon={FaTrash}
            size={16}
            onClick={() => onDelete(photo.id)}
          />
        )}
      </div>
    </div>
  );
}
