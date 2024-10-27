


import baseApi from "./baseApi";




const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (data) => ({
                url: '/order',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['order'],
        }),
        getAllOrder: builder.query({
            query: () => ({
                url: '/order',
                method: 'GET'
            }),
            providesTags: ['order'],
            transformResponse: (res: any) => {
                return res.data;
            }
        }),
        updateOrder: builder.mutation({
            query: ({data,oid}) => ({
                url: `/order/update/${oid}`,
                method: "PATCH",
                body:data
            }),
            invalidatesTags: ['order'],
            transformResponse: (res: any) => {
                return res.data;
            }
        }),
    })
})

export const {
    useCreateOrderMutation,
    useGetAllOrderQuery,
    useUpdateOrderMutation,

} = orderApi;