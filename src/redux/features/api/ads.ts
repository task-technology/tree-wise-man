import { baseApi } from "../../api/apiSlice";

const AdsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // need to change api
    createHeroAds: builder.mutation({
      query: ({ fullData, token }) => {
        return {
          url: "/customize/carousel",
          headers: {
            authorization: token,
          },
          method: "POST",
          body: fullData,
        };
      },
      invalidatesTags: ["customize"],
    }),
    createHeadlineAds: builder.mutation({
      query: ({ fullData, token }) => {
        return {
          url: "/customize/headline",
          headers: {
            authorization: token,
          },
          method: "POST",
          body: fullData,
        };
      },
      invalidatesTags: ["customize"],
    }),

    getHeroAds: builder.query({
      query: ({ query }) => {
        return {
          url: `/customize/carousel?${query}`,
        };
      },
      providesTags: ["customize"],
    }),
    getHeadlineAds: builder.query({
      query: ({ token, query }) => {
        return {
          url: `/post/cards?${query}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["customize"],
    }),

    deleteHeroAds: builder.mutation({
      query: ({ token, id }) => {
        return {
          url: `/customize/carousel/${id}`,
          method: "DELETE",
          headers: {
            authorization: token,
          },
        };
      },
      invalidatesTags: ["customize"],
    }),
    deleteHeadlineAds: builder.mutation({
      query: ({ token, id }) => {
        return {
          url: `/customize/headline/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
      invalidatesTags: ["customize"],
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
} = AdsApi;
