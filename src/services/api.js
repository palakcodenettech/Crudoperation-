import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  prepareHeaders: (headers) => {
    let token = localStorage.getItem("token");
    headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});
export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: baseQuery,

  endpoints: (builder) => ({
    UserLogin: builder.mutation({
      query: (data) => ({
        url: `login`,
        method: "POST",
        body:data
      }),
    }),
    RegisterUser:builder.mutation({
      query: (data) => ({
        url: `register`,
        method: "POST",
        body:data
      }),
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: `cars/getdata`,
        method: "GET",
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `cars/deletedata/${id}`,
        method: "DELETE",
      }),
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: `cars/insert`,
        method: "POST",
        body: product,
      }),
    }),

    updateProduct: builder.mutation({
      query: (update) => ({
        url: `cars/update/${update.GetId}`,
        method: "PUT",
        body: update.formdata,
      }),
    }),
  }),
});
export const {
  useLazyGetAllProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useUserLoginMutation,
  useRegisterUserMutation
} = carApi;
