import { useCallback, useMemo, useState } from "react";
import Loader from "../../../components/loader/Loader";
import { Pagination } from "../../../components/table/Pagination";
import {
  useCreatePhotoMutation,
  useDeletePhotoMutation,
  useGetPhotosQuery,
  useUplatePhotoMutation,
} from "../../../features/advance_redux_uses/photosSlice";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { useToaste } from "../../../components/toaster/useToast";
import { useDebounce } from "../../../features/hook/useDebounce";
import { fileToBase64 } from "../../../utils/file";
import FormDialog from "../../../components/dialog/FormDialog";
import { EmptyState } from "../../../components/empty-state/EmptyState";
import { DemoButton } from "../../../components/button/DemoButton";
import { DemoChip } from "../../../components/chip/DemoChip";
import { DemoChipGroup } from "../../../components/chip/DemoChipGroup";
//If want to skip anything
// import { skipToken } from "@reduxjs/toolkit/query";

type EditPhoto = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
};

//this is emtry form
const emptyForm: Partial<EditPhoto> = {
  title: "",
  url: "",
  thumbnailUrl: "",
  albumId: 1,
};

export function ExampleThree() {
  const [page, setPage] = useState(1);
  const pageSize = 15;

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  // fetch all photos (from local JSON)
  // const { data, isLoading, error } = useGetPhotosQuery();
  const { data, isLoading, error, refetch } = useGetPhotosQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [createPhoto] = useCreatePhotoMutation();
  const [updatePhoto] = useUplatePhotoMutation();
  const [deletePhoto] = useDeletePhotoMutation();
  // const [selectedPhotoId, setSelectedPhotoId] = useState<number | null>(null);

  const { showToast } = useToaste();

  // form state
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<Partial<EditPhoto>>(emptyForm);
  const isEdit = Boolean(form.id);

  // Handle search filtering
  // Filter photos
  const filteredPhotos = useMemo(() => {
    if (!data?.data) return [];
    if (!debouncedSearch) return data.data;
    return data.data.filter((p: EditPhoto) =>
      p.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [data, debouncedSearch]);

  // Determine if the lack of data is due to a Search or just an Empty Gallery
  // const isEmptySearch =
  //   debouncedSearch.length > 0 && filteredPhotos.length === 0;
  // const isGalleryEmpty = !isLoading && (!data?.data || data.data.length === 0);

  const totalItems = filteredPhotos.length;
  const totalPages = Math.ceil(filteredPhotos.length / pageSize);

  // Slice for current page
  const currentPhotos = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return filteredPhotos.slice(start, end);
  }, [filteredPhotos, page]);

  /* ------------------ handlers ------------------ */

  // 1. Wrap openCreate in useCallback
  const openCreate = useCallback(() => {
    setForm(emptyForm);
    setIsOpen(true);
  }, []);

  const openEdit = useCallback((photo: EditPhoto) => {
    setForm(photo);
    setIsOpen(true);
  }, []);

  const closeForm = useCallback(() => {
    setIsOpen(false);
    setForm(emptyForm);
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const base64 = await fileToBase64(file);
    setForm((p) => ({ ...p, thumbnailUrl: base64 }));
  };

  // 1. Determine the status and action based on the app state
  const emptyStateProps = useMemo(() => {
    if (debouncedSearch) {
      return {
        status: "search" as const,
        action: (
          <DemoButton
            title="Clear search query"
            onClick={() => {
              setSearch("");
              setPage(1);
            }}
          />
        ),
      };
    }
    return {
      status: "file" as const,
      action: (
        <DemoButton
          title="Upload Your First Photo"
          onClick={openCreate}
          buttonColor="bg-(--surface)"
        />
      ),
    };
  }, [debouncedSearch, openCreate]);

  const handleSubmit = async () => {
    try {
      if (!form.title || !form.thumbnailUrl) {
        showToast("Title & Image are required", "error");
        return;
      }
      console.log(form);

      if (isEdit && form.id !== undefined) {
        await updatePhoto({
          id: form.id,
          title: form.title,
          thumbnailUrl: form.thumbnailUrl,
          albumId: form.albumId ?? 1,
          url: form.url ?? "",
        }).unwrap();
        refetch();

        showToast("Photo updated", "success");
      } else {
        await createPhoto(form).unwrap();
        refetch();
        showToast("Photo created", "success");
      }

      closeForm();
    } catch (error: unknown) {
      // Safe type narrowing
      if (error instanceof Error) {
        showToast(error.message, "error");
      } else {
        showToast("Action failed", "error");
      }
    }
  };

  const handleDelete = async (id: number) => {
    try {
      console.log(id);
      await deletePhoto(id);
      showToast("Photo deleted successfully", "success");
    } catch (e: unknown) {
      if (e instanceof Error) {
        showToast(`Delete failed: ${e.message}`, "error");
      } else {
        showToast("Action failed", "error");
      }
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  /* ------------------ render ------------------ */

  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-500">Error loading photos</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">
          Photo Gallery: {totalItems} items, Page {page}/{totalPages || 1}
        </h1>
        <DemoButton title="Add Photo" onClick={openCreate} icon={FaPlus} />
      </div>

      <div className="flex justify-between items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          className="input-search w-full"
        />
      </div>
      {debouncedSearch && currentPhotos && (
        <div className="mt-2 flex flex-col justify-start items-center gap-2">
          <p className="text-sm text-(--muted) bg-accent">Active Filter:</p>
          <DemoChipGroup
            data={currentPhotos?.flatMap((i) => i.title.slice(0, 5))}
            direction="col"
          />
        </div>
      )}

      {/* 1. Check if there are photos to display */}
      {currentPhotos.length > 0 ? (
        <>
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
                  {/* using chips */}

                  <p className="text-(--foreground) text-sm">
                    {photo.url}
                    {photo.id}
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-2 flex gap-2">
                  <FaPen
                    size={20}
                    className="text-(--muted)"
                    onClick={() => openEdit(photo)}
                  />
                  <FaTrash
                    size={20}
                    className="text-(--muted)"
                    onClick={() => handleDelete(photo.id)}
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
        </>
      ) : (
        /* 2. Show EmptyState when currentPhotos is empty */
        <div className="py-20">
          {" "}
          {/* Add padding to center it vertically in your layout */}
          <EmptyState {...emptyStateProps} />
        </div>
      )}

      {/* -------- Modal Form -------- */}
      <FormDialog
        open={isOpen}
        onClose={closeForm}
        title={isEdit ? "Edit Form" : " Create Form"}
        columns={2}
        footer={
          <>
            <DemoButton title="Cancel" onClick={closeForm} />
            <DemoButton
              title={isEdit ? "Update" : "Create"}
              onClick={handleSubmit}
            />
          </>
        }
      >
        {/* <div className="space-y-3 w-full"> */}
        <input
          placeholder="Title"
          value={form.title || ""}
          onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
          className="input-field"
        />
        <div className="flex gap-3 bg-accent">
          {/* <input
            placeholder="URL"
            value={form.url || ""}
            onChange={(e) => setForm((p) => ({ ...p, url: e.target.value }))}
          /> */}
          {form.thumbnailUrl && (
            <img src={form.thumbnailUrl} className="h-24 " />
          )}
          <input
            type="file"
            onChange={handleFileChange}
            className="input-field"
          />
        </div>
        {/* </div> */}
      </FormDialog>
    </div>
  );
}
