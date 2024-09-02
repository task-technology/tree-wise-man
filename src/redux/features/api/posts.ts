import { baseApi } from "../../api/apiSlice";

const PostsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: ({ token, fullData }) => {
        return {
          url: "/post/create",
          headers: {
            authorization: token,
          },
          method: "POST",
          body: fullData,
        };
      },
      invalidatesTags: ["post"],
    }),

    getPosts: builder.query({
      query: ({ query }) => {
        return {
          url: `/post?searchTerm=${query}`,
        };
      },
      providesTags: ["post"],
    }),

    getPostsAdmin: builder.query({
      query: ({ query, token }) => {
        return {
          url: `/post/admin?${query}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["post"],
    }),

    getMyPost: builder.query({
      query: ({ token, query }) => {
        return {
          url: `/post/my-post?${query}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["post"],
    }),

    getSinglePost: builder.query({
      query: ({ token, id }) => {
        return {
          url: `/post/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["post"],
    }),

    postEdit: builder.mutation({
      query: ({ token, id, fullData }) => {
        return {
          url: `/post/${id}`,
          headers: {
            authorization: token,
          },
          method: "PATCH",
          body: fullData,
        };
      },
      invalidatesTags: ["post"],
    }),

    postEditByAdmin: builder.mutation({
      query: ({ token, id, fullData }) => {
        return {
          url: `/post/admin/${id}`,
          headers: {
            authorization: token,
          },
          method: "PATCH",
          body: fullData,
        };
      },
      invalidatesTags: ["post"],
    }),
    postDelete: builder.mutation({
      query: ({ token, id }) => {
        return {
          url: `/post/${id}`,
          headers: {
            authorization: token,
          },
          method: "DELETE",
        };
      },
      invalidatesTags: ["post"],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetPostsQuery,
  useGetSinglePostQuery,
  usePostEditMutation,
  usePostEditByAdminMutation,
  usePostDeleteMutation,
  useGetMyPostQuery,
  useGetPostsAdminQuery,
} = PostsApi;
