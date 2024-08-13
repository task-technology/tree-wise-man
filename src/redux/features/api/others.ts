import { baseApi } from "../../api/apiSlice";

const OtherApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnalytics: builder.query({
      query: ({ token }) => {
        return {
          url: "post/analytics",
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["user", "post", "subscriptions", "postClick"],
    }),
    login: builder.mutation({
      query: ({ fullData }) => {
        return {
          url: "/login",

          method: "POST",
          body: fullData,
        };
      },
    }),

    register: builder.mutation({
      query: ({ token, fullData }) => {
        return {
          url: "/auth/user/create-user",
          headers: {
            authorization: token,
          },
          method: "DELETE",
          body: fullData,
        };
      },
    }),

    forgetPassword: builder.mutation({
      query: ({ token, fullData }) => {
        return {
          url: "/auth/user/create-user",
          headers: {
            authorization: token,
          },
          method: "DELETE",
          body: fullData,
        };
      },
    }),

    clickCountService: builder.mutation({
      query: ({ token, id }) => {
        return {
          url: `post/click/${id}`,
          headers: {
            authorization: token,
          },
          method: "PATCH",
        };
      },
      invalidatesTags: ["postClick"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgetPasswordMutation,
  useClickCountServiceMutation,
  useGetAnalyticsQuery,
} = OtherApi;
