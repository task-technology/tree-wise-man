import { baseApi } from "../../api/apiSlice";

const PostsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: ({ token, fullData }) => {
        console.log("/post/create");
        return {
          url: "/post/create",
          headers: {
            authorization: token,
          },
          method: "POST",
          body: fullData,
        };
      },
    }),

    getPosts: builder.query({
      query: ({ token }) => {
        return {
          url: "/post",
          headers: {
            authorization: token,
          },
        };
      },
    }),

    getSinglePost: builder.query({
      query: ({ token, id }) => {
        return {
          url: `/posts/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
    }),

    postEdit: builder.mutation({
      query: ({ token, id, fullData }) => {
        return {
          url: `/posts/${id}`,
          headers: {
            authorization: token,
          },
          method: "PATCH",
          body: fullData,
        };
      },
    }),

    postEditByAdmin: builder.mutation({
      query: ({ token, id, fullData }) => {
        return {
          url: `/posts/admin/${id}`,
          headers: {
            authorization: token,
          },
          method: "PATCH",
          body: fullData,
        };
      },
    }),
    postDelete: builder.mutation({
      query: ({ token, id, fullData }) => {
        return {
          url: `/posts/${id}/delete`,
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
  useCreatePostMutation,
  useGetPostsQuery,
  useGetSinglePostQuery,
  usePostEditMutation,
  usePostEditByAdminMutation,
} = PostsApi;
