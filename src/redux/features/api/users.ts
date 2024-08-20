import { baseApi } from "../../api/apiSlice";

const UsersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userCreate: builder.mutation({
      query: ({ fullData }) => {
        return {
          url: "/auth/user/create-user",

          method: "POST",
          body: fullData,
        };
      },
      invalidatesTags: ["user"],
    }),

    getUsers: builder.query({
      query: ({ token, query }) => {
        return {
          url: `/user?${query}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["user"],
    }),

    getSingleUser: builder.query({
      query: ({ token, id }) => {
        return {
          url: `/user/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["user"],
    }),

    userEdit: builder.mutation({
      query: ({ token, id, fullData }) => {
        return {
          url: `/user/${id}`,
          headers: {
            authorization: token,
          },
          method: "PATCH",
          body: fullData,
        };
      },
      invalidatesTags: ["user"],
    }),

    userMyProfile: builder.query({
      query: ({ token }) => {
        return {
          url: "/user/my-profile",
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["user"],
    }),
    userDelete: builder.mutation({
      query: ({ token, id, fullData }) => {
        return {
          url: `/user/${id}`,
          headers: {
            authorization: token,
          },
          method: "DELETE",
          body: fullData,
        };
      },
      invalidatesTags: ["user"],
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
