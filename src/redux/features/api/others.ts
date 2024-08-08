import { baseApi } from "../../api/apiSlice";

const OtherApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
          method: "POST",
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgetPasswordMutation,
  useClickCountServiceMutation,
} = OtherApi;
