import { baseApi } from "../../api/apiSlice";

const PaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentData: builder.query({
      query: ({ token, query }) => {
        return {
          url: `/payment?${query}`,

          headers: {
            authorization: token,
          },
        };
      },
    }),
  }),
});

export const { useGetPaymentDataQuery } = PaymentApi;
