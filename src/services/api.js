import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const carApi = createApi({
    reducerPath: "carApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL  ,prepareHeaders: (headers) => {
        headers.set(
          "Authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxpcHNhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE2ODExODg3MTR9.UjwNxXB8fz6pbf1LbZX27oNmxzngT56AU_w4B4qY-Vk"
        );
        return headers;
      },}),
    
    endpoints: (builder) => ({
        getAllProducts: builder.query({
          query: () => ({
            url: `getdata`,
            method: "GET",
          }),
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `deletedata/${id}`,
                method: "DELETE"
            })
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: `insert`,
                method: "POST",
                body: product
            })
        }),

        updateProduct: builder.mutation({
            query: (editCar) => ({
              url: `/update/${editCar.id}`,
              method: "PUT",
              body: editCar.value,
            }),
          }),
    })
})
export const { useLazyGetAllProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = carApi
