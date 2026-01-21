import Loader from "../../../components/loader/Loader";
import { useGetPhotosQuery } from "../../../features/advance_redux_uses/photosSlice";

type editPhote = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
};
export function ExampleThree() {
  const { data: photos, isLoading, error } = useGetPhotosQuery();

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
      <div className="w-full h-auto p-5 grid grid-cols-4 gap-3"></div>
    </div>
  );
}
