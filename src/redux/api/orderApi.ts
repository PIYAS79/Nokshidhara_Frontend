


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
        // deletePackage: builder.mutation({
        //     query: (pid) => ({
        //         url: `/package/${pid}`,
        //         method: "DELETE"
        //     }),
        //     invalidatesTags: ['package'],
        //     transformResponse: (res: any) => {
        //         return res.data;
        //     }
        // }),
        // updatePackage: builder.mutation({
        //     query: ({data,pid}) => ({
        //         url: `/package/${pid}`,
        //         method: "PATCH",
        //         body:data
        //     }),
        //     invalidatesTags: ['package'],
        //     transformResponse: (res: any) => {
        //         return res.data;
        //     }
        // }),
    })
})

export const {
    useCreateOrderMutation,
    useGetAllOrderQuery,


} = orderApi;