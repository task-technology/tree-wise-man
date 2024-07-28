import { baseApi } from "../../api/apiSlice";

const UsersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userCreate: builder.mutation({
      query: ({ token, fullData }) => {
        return {
          url: "/users/create",
          headers: {
            authorization: token,
          },
          method: "POST",
          body: fullData,
        };
      },
    }),

    getUsers: builder.query({
      query: ({ token, page, limit }) => {
        return {
          url: `/users?page=${page}&limit=${limit}`,
          headers: {
            authorization: token,
          },
        };
      },
    }),

    getSingleUser: builder.query({
      query: ({ token, id }) => {
        return {
          url: `/users/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
    }),

    userEdit: builder.mutation({
      query: ({ token, id, fullData }) => {
        return {
          url: `/users/${id}`,
          headers: {
            authorization: token,
          },
          method: "PATCH",
          body: fullData,
        };
      },
    }),

    userMyProfile: builder.query({
      query: ({ token }) => {
        return {
          url: "/users/my-profile",
          headers: {
            authorization: token,
          },
        };
      },
    }),
    userDelete: builder.mutation({
      query: ({ token, id, fullData }) => {
        return {
          url: `/users/${id}/delete`,
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
  useUserCreateMutation,
  useGetUsersQuery,
  useGetSingleUserQuery,
  useUserEditMutation,
  useUserMyProfileQuery,
  useUserDeleteMutation,
} = UsersApi;
