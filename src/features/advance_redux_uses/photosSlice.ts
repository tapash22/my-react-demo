import { createCrudApi } from "../crudapi/createCrudApi";
import { type Photo } from "../type/User";

export const photosApi = createCrudApi<Photo>({
  reducerPath: "photosApi",
  tagName: "Photo",
  endpoint: "photos",
});

export const {
  useGetAllQuery: useGetPhotosQuery,
  useGetByIdQuery: useGetPhotoQuery,
  useCreateMutation: useCreatePhotoMutation,
  useUpdateMutation: useUplatePhotoMutation,
  useDeleteMutation: useDeletePhotoMutation,
} = photosApi;
