import { baseApi } from "../../api/apiSlice";

const AdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminCreate: builder.mutation({
      query: ({ token, fullData }) => {
        return {
          url: "/auth/user/create-admin",
          headers: {
            authorization: token,
          },
          method: "POST",
          body: fullData,
        };
      },
      invalidatesTags: ["admin"],
    }),
    getAdmin: builder.query({
      query: ({ token, query }) => {
        console.log(`/user?${query}`);
        return {
          url: `/admin?${query}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["admin"],
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
          url: `/admin/${id}`,
          headers: {
            authorization: token,
          },
          method: "DELETE",
          body: fullData,
        };
      },
      invalidatesTags: ["admin"],
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
