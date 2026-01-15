import { createCrudApi } from "../crudapi/createCrudApi";
import type { Post } from "../type/User";

export const postsApi = createCrudApi<Post>({
  reducerPath: "postsApi",
  tagName: "Post",
  endpoint: "posts",
});

export const {
  useGetAllQuery: useGetPostsQuery,
  useGetByIdQuery: useGetPostQuery,
  useCreateMutation: useCreatePostMutation,
  useUpdateMutation: useUpdatePostMutation,
  useDeleteMutation: useDeletePostMutation,
} = postsApi;
