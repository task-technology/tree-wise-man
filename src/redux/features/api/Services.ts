import { baseApi } from "../../api/apiSlice";

const ServicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdmin: builder.query({
      query: ({ token }) => {
        return {
          url: `https://jsonplaceholder.typicode.com/posts`,
          headers: {
            authorization: token,
          },
        };
      },
    }),

    updatePassword: builder.mutation({
      query: ({ id, fullData, token }) => {
        return {
          url: `/auth/admin/change-password/${id}`,
          headers: {
            authorization: token,
          },
          method: "POST",
          body: fullData,
        };
      },
    }),
  }),
});

export const { useGetAdminQuery, useUpdatePasswordMutation } = ServicesApi;
