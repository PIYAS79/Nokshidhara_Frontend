import baseApi from "./baseApi";




const packageApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPackage: builder.mutation({
            query: (data) => ({
                url: '/package',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['package'],
        }),
        getAllPackage: builder.query({
            query: () => ({
                url: '/package',
                method: 'GET'
            }),
            providesTags: ['package'],
            transformResponse: (res: any) => {
                return res.data;
            }
        }),
        deletePackage: builder.mutation({
            query: (pid) => ({
                url: `/package/${pid}`,
                method: "DELETE"
            }),
            invalidatesTags: ['package'],
            transformResponse: (res: any) => {
                return res.data;
            }
        }),
        updatePackage: builder.mutation({
            query: ({data,pid}) => ({
                url: `/package/${pid}`,
                method: "PATCH",
                body:data
            }),
            invalidatesTags: ['package'],
            transformResponse: (res: any) => {
                return res.data;
            }
        }),
    })
})

export const {
    useCreatePackageMutation,
    useGetAllPackageQuery,
    useDeletePackageMutation,
    useUpdatePackageMutation,

} = packageApi;