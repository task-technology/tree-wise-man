import { baseApi } from "../../api/apiSlice";

const AdsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // need to change api
    createHeroAds: builder.mutation({
      query: ({ fullData, token }) => {
        return {
          url: "/auth/user/create-user",
          headers: {
            authorization: token,
          },
          method: "POST",
          body: fullData,
        };
      },
      invalidatesTags: ["user"],
    }),
    createHeadlineAds: builder.mutation({
      query: ({ fullData, token }) => {
        return {
          url: "/auth/user/create-user",
          headers: {
            authorization: token,
          },
          method: "POST",
          body: fullData,
        };
      },
      invalidatesTags: ["user"],
    }),

    getHeroAds: builder.query({
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
    getHeadlineAds: builder.query({
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

    deleteHeroAds: builder.mutation({
      query: ({ token, id }) => {
        return {
          url: `/user/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
      invalidatesTags: ["user"],
    }),
    deleteHeadlineAds: builder.mutation({
      query: ({ token, id }) => {
        return {
          url: `/user/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
      invalidatesTags: ["user"],
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
  useCreateHeroAdsMutation,
  useCreateHeadlineAdsMutation,
  useGetHeroAdsQuery,
  useGetHeadlineAdsQuery,
  useDeleteHeadlineAdsMutation,
  useDeleteHeroAdsMutation,
  useUserEditMutation,
  useUserMyProfileQuery,
  useUserDeleteMutation,
} = AdsApi;
