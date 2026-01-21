import { useState } from "react";
import Loader from "../../../components/loader/Loader";
import { Pagination } from "../../../components/table/Pagination";
import {
  useDeletePhotoMutation,
  useGetPhotosQuery,
} from "../../../features/advance_redux_uses/photosSlice";
import { FaPen, FaTrash } from "react-icons/fa";
import { useToaste } from "../../../components/toaster/useToast";

type editPhote = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
};
export function ExampleThree() {
  const { data: photos, isLoading, error } = useGetPhotosQuery();
  const [deletePhote] = useDeletePhotoMutation();

  const [selectedPhoteId, setSelectedPhotoId] = useState<number | null>(null);

  const [page, setPage] = useState(1);
  const pageSize = 15;

  const { showToast } = useToaste();

  const totalPages = Math.ceil((photos?.length ?? 0) / pageSize);
  const startIndex = (page - 1) * pageSize;
  const currentData = photos?.slice(startIndex, startIndex + pageSize);

  //   method
  const { data: allPhotos } = useGetPhotosQuery(); // no args
  const singlePhoto = allPhotos?.find((p) => p.id === selectedPhoteId);
  const onEdit = (row: editPhote) => {
    showToast(`selected id is ${row.id}`, "success");
    setSelectedPhotoId(row.id);
  };

  const handleDelete = async (row: editPhote) => {
    try {
      await deletePhote(row.id).unwrap();

      showToast("Photo deleted successfully", "success");
    } catch (error) {
      const e = error as Error;
      showToast(`Delete failed: ${e.message}`, "error");
    }
  };

  if (isLoading) return <Loader />;
  if (error) {
    let errorMessage = "Something went wrong";

    if ("status" in error) {
      errorMessage = `Error ${error.status}: ${JSON.stringify(error.data)}`;
    } else if ("message" in error) {
      errorMessage = error.message ?? "";
    }

    return <p className="text-red-500">{errorMessage}</p>;
  }

  return (
    <div>
      <h1>Photo Gallery</h1>
      {singlePhoto && singlePhoto.id};;
      {pageSize}
      <div className="w-full h-auto p-5 grid grid-cols-4 gap-3 space-y-3">
        {currentData?.map((photo) => (
          <div
            key={photo.id}
            className="bg-(--card-bg) ring-2 ring-(--card-borde-dark) block p-3 relative rounded-xl "
          >
            <div>
              <div className="w-full max-h-52 p-2 flex justify-center align-middle">
                <img src={photo.thumbnailUrl} className="" />
              </div>
              <div className="block p-2 h-auto space-y-3">
                <h2 className="text-(--foreground) text-lg font-semibold tracking-wide leading-5 text-wrap">
                  {photo.title.charAt(0).toUpperCase() + photo.title.slice(1)}
                </h2>
                <p className="text-(--foreground) font-normal text-sm tracking-wide leading-4">
                  link:{photo.url}
                </p>
              </div>
            </div>
            <div className="absolute right-0 top-0 p-2">
              <div className="flex justify-end items-center gap-3 z-30">
                <FaPen
                  size={20}
                  className="text-(--muted)"
                  onClick={() => onEdit(photo)}
                />
                <FaTrash
                  size={20}
                  className="text-(--muted)"
                  onClick={() => handleDelete(photo)}
                />{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination totalPages={totalPages} page={page} onPageChange={setPage} />
    </div>
  );
}
