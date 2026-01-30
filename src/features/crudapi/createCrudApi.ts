import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type BaseEntity } from "../type/User";
import { store } from "../../store";

// Generic CRUD options
interface CrudOptions<T> {
  reducerPath: string;
  tagName: string;
  endpoint: string; // e.g., "users", "posts"
  type: T; // TypeScript type of the resource
}

export function createCrudApi<T extends BaseEntity>({
  reducerPath,
  tagName,
  endpoint,
}: Omit<CrudOptions<T>, "type">) {
  return createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:3001/",
    }),
    tagTypes: [tagName],
    endpoints: (builder) => ({
      //Get All DATA
      getAll: builder.query<{ data: T[]; total: number }, void>({
        query: () => endpoint,
        transformResponse: (response: T[]) => {
          const data = response.map((item) => ({
            ...item,
            id: Number(item.id),
            ...(item.thumbnailUrl && {
              thumbnailUrl: item.thumbnailUrl.startsWith("/")
                ? `${window.location.origin}${item.thumbnailUrl}`
                : item.thumbnailUrl,
            }),
          })) as T[];
          return { data, total: data.length };
        },
        providesTags: (result) =>
          result
            ? [
                ...result.data.map(({ id }) => ({ type: tagName, id })),
                { type: tagName, id: "LIST" },
              ]
            : [{ type: tagName, id: "LIST" }],
      }),

      //get by ID
      getById: builder.query<T, number>({
        query: (id) => `${endpoint}/${id}`,
        //if use as params
        //   query: (id) => ({
        //   url: endpoint,
        //   params: { id },
        // }),
        providesTags: (_result, _error, id) => [{ type: tagName, id }],
      }),

      // CREATE with auto ID
      create: builder.mutation<T, Partial<T> & { id?: number }>({
        query: (body) => {
          const newBody = { ...body };

          if (!newBody.id) {
            const rootState = store.getState();

            // Narrow reducer slice safely
            const apiState = rootState[
              reducerPath as keyof typeof rootState
            ] as {
              queries?: Record<string, { data?: { data: T[]; total: number } }>;
            };

            const cacheKey = "getAll(undefined)";
            const cachedData = apiState?.queries?.[cacheKey]?.data?.data;

            newBody.id = cachedData ? cachedData.length + 1 : 1;
          }

          return {
            url: endpoint,
            method: "POST",
            body: newBody,
          };
        },
        invalidatesTags: [{ type: tagName, id: "LIST" }],
      }),

      // create: builder.mutation<T, Partial<T>>({
      //   query: (body) => ({
      //     url: endpoint,
      //     method: "POST",
      //     body,
      //   }),
      //   invalidatesTags: [{ type: tagName, id: "LIST" }],
      // }),

      //update
      update: builder.mutation<T, Partial<T> & Pick<T, "id">>({
        query: ({ id, ...body }) => ({
          url: `${endpoint}/${id}`,
          method: "PATCH", // or PATCH
          body,
        }),
        invalidatesTags: (_result, _error, { id }) => [
          { type: tagName, id },
          { type: tagName, id: "LIST" },
        ],
      }),

      //delete
      delete: builder.mutation<void, number>({
        query: (id) => ({
          url: `${endpoint}/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: (_r, _e, id) => [
          { type: tagName, id },
          { type: tagName, id: "LIST" },
        ],
      }),

      ///handle image with base64
      uploadImage: builder.mutation<
        T,
        { id?: number; image: string } & Partial<T>
      >({
        query: ({ id, ...body }) => ({
          url: id ? `${endpoint}/${id}` : endpoint,
          method: id ? "PATCH" : "POST",
          body,
        }),
        invalidatesTags: [{ type: tagName, id: "LIST" }],
      }),
    }),
  });
}
