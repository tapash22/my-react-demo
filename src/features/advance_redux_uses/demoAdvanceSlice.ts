import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type User } from "../type/User";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // GET ALL USERS
    getUsers: builder.query<User[], void>({
      query: () => "users",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "User" as const, id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),
    // GET USER DETAILS
    getUser: builder.query<User, number>({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),

    // Create a new user
    createUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),

    // Update user
    updateUser: builder.mutation<User, Partial<User> & Pick<User, "id">>({
      query: ({ id, ...body }) => ({
        url: `users/${id}`,
        method: "PUT", // or PATCH if partial update
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),

    // Delete user
    deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "User", id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
