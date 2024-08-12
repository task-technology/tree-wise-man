import { baseApi } from "../../api/apiSlice";

const PaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentData: builder.query({
      query: ({ token }) => {
        return {
          url: "post/analytics",
          headers: {
            authorization: token,
          },
        };
      },
    }),
  }),
});

export const {} = PaymentApi;
