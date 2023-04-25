import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
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
            query: (update) => ({
              url: `/update/${update.GetId}`,
              method: "PUT",
              body: update.formdata,
            }),
          }),
          
    })
})
export const { useLazyGetAllProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = carApi
