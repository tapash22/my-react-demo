import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Generic CRUD options
interface CrudOptions<T> {
  reducerPath: string;
  tagName: string;
  endpoint: string; // e.g., "users", "posts"
  type: T; // TypeScript type of the resource
}

export function createCrudApi<T extends { id: number }>({
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
      getAll: builder.query<{ data: T[]; total: number }, void>({
        query: () => "photos",
        transformResponse: (response: T[]) => {
          const data = response.map((item: any) => ({
            ...item,
            id: Number(item.id),
            thumbnailUrl: item.thumbnailUrl.startsWith("/")
              ? `${window.location.origin}${item.thumbnailUrl}`
              : item.thumbnailUrl,
          }));
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

      getById: builder.query<T, number>({
        query: (id) => `${endpoint}/${id}`,
        //if use as params
        //   query: (id) => ({
        //   url: endpoint,
        //   params: { id },
        // }),
        providesTags: (_result, _error, id) => [{ type: tagName, id }],
      }),

      create: builder.mutation<T, Partial<T>>({
        query: (body) => ({
          url: endpoint,
          method: "POST",
          body,
        }),
        invalidatesTags: [{ type: tagName, id: "LIST" }],
      }),
      update: builder.mutation<T, Partial<T> & Pick<T, "id">>({
        query: ({ id, ...body }) => ({
          url: `${endpoint}/${id}`,
          method: "PUT", // or PATCH
          body,
        }),
        invalidatesTags: (_result, _error, { id }) => [
          { type: tagName, id },
          { type: tagName, id: "LIST" },
        ],
      }),

      delete: builder.mutation<{ success: boolean; id: number }, number>({
        query: (id) => ({
          url: `${endpoint}/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: (_result, _error, id) => [
          { type: tagName, id },
          { type: tagName, id: "LIST" },
        ],
      }),
    }),
  });
}
