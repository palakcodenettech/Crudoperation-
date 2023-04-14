import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
let headers = {}
    if (localStorage.token) {
        headers = { 'Authorization': `Bearer `+ localStorage.token }
        console.log(headers);
    }
export const carApi = createApi({
    reducerPath: "carApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL  ,headers: headers}),
    
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
