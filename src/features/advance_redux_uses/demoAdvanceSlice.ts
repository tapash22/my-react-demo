import { type User } from "../type/User";
import { createCrudApi } from "../crudapi/createCrudApi";

export const usersApi = createCrudApi<User>({
  reducerPath: "usersApi",
  tagName: "User",
  endpoint: "users",
});

export const {
  useGetAllQuery: useGetUsersQuery,
  useGetByIdQuery: useGetUserQuery,
  useCreateMutation: useCreateUserMutation,
  useUpdateMutation: useUpdateUserMutation,
  useDeleteMutation: useDeleteUserMutation,
} = usersApi;
