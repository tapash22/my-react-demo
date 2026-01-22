import { useMemo, useState } from "react";
import Loader from "../../../components/loader/Loader";
import { Pagination } from "../../../components/table/Pagination";
import {
  useDeletePhotoMutation,
  useGetPhotosQuery,
} from "../../../features/advance_redux_uses/photosSlice";
import { FaPen, FaTrash } from "react-icons/fa";
import { useToaste } from "../../../components/toaster/useToast";
import { useDebounce } from "../../../features/hook/useDebounce";
//If want to skip anything
// import { skipToken } from "@reduxjs/toolkit/query";

type EditPhoto = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
};
export function ExampleThree() {
  const [page, setPage] = useState(1);
  const pageSize = 15;

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  // fetch all photos (from local JSON)
  const { data, isLoading, error } = useGetPhotosQuery();
  const [deletePhoto] = useDeletePhotoMutation();
  const [selectedPhotoId, setSelectedPhotoId] = useState<number | null>(null);

  const { showToast } = useToaste();

  // Handle search filtering
  const filteredPhotos = useMemo(() => {
    if (!data?.data) return [];
    if (!debouncedSearch) return data.data;
    return data.data.filter((p: EditPhoto) =>
      p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [data, debouncedSearch]);

  const totalItems = filteredPhotos.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  // Slice for current page
  const currentPhotos = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return filteredPhotos.slice(start, end);
  }, [filteredPhotos, page]);

  const singlePhoto = currentPhotos.find((p) => p.id === selectedPhotoId);

  const onEdit = (row: EditPhoto) => {
    showToast(`Selected id: ${row.id}`, "success");
    setSelectedPhotoId(row.id);
  };

  const handleDelete = async (row: EditPhoto) => {
    try {
      await deletePhoto(row.id).unwrap();
      showToast("Photo deleted successfully", "success");
    } catch (e: any) {
      showToast(`Delete failed: ${e.message}`, "error");
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); // reset to first page
  };

  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-500">Error loading photos</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">
          Photo Gallery: {totalItems} items, Page {page}/{totalPages || 1}
        </h1>
      </div>

      <div className="flex justify-between items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          className="input-search w-full"
        />
        <span className="font-bold text-lg">{singlePhoto?.id ?? 0}</span>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {currentPhotos.map((photo) => (
          <div
            key={photo.id}
            className="bg-(--card-bg) ring-2 ring-(--card-borde-dark) p-3 relative rounded-xl"
          >
            <div className="flex justify-center p-2">
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="max-h-52"
              />
            </div>
            <div className="p-2">
              <h2 className="text-(--foreground) font-semibold">
                {photo.title.charAt(0).toUpperCase() + photo.title.slice(1)}
              </h2>
              <p className="text-(--foreground) text-sm">{photo.url}</p>
            </div>
            <div className="absolute top-0 right-0 p-2 flex gap-2">
              <FaPen
                size={20}
                className="text-(--muted)"
                onClick={() => onEdit(photo)}
              />
              <FaTrash
                size={20}
                className="text-(--muted)"
                onClick={() => handleDelete(photo)}
              />
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
