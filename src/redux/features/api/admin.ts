import { baseApi } from "../../api/apiSlice";

const AdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminCreate: builder.mutation({
      query: ({ token, fullData }) => {
        return {
          url: "/admin/create",
          headers: {
            authorization: token,
          },
          method: "POST",
          body: fullData,
        };
      },
    }),

    getAdmin: builder.query({
      query: ({ token, page, limit }) => {
        return {
          url: `/admin?page=${page}&limit=${limit}`,
          headers: {
            authorization: token,
          },
        };
      },
    }),

    getSingleAdmin: builder.query({
      query: ({ token, id }) => {
        return {
          url: `/admin/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
    }),

    adminEdit: builder.mutation({
      query: ({ token, id, fullData }) => {
        return {
          url: `/admin/${id}`,
          headers: {
            authorization: token,
          },
          method: "PATCH",
          body: fullData,
        };
      },
    }),

    adminMyProfile: builder.query({
      query: ({ token }) => {
        return {
          url: "/admin/my-profile",
          headers: {
            authorization: token,
          },
        };
      },
    }),
    adminDelete: builder.mutation({
      query: ({ token, id, fullData }) => {
        return {
          url: `/admin/${id}/delete`,
          headers: {
            authorization: token,
          },
          method: "DELETE",
          body: fullData,
        };
      },
    }),
  }),
});

export const {
  useAdminCreateMutation,
  useGetAdminQuery,
  useAdminDeleteMutation,
  useAdminEditMutation,
  useAdminMyProfileQuery,
  useGetSingleAdminQuery,
} = AdminApi;
