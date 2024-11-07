import baseApi from "./baseApi";



const bannerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getWebBannerLinks: builder.query({
            query: () => ({
                url: '/banner',
                method: "GET"
            }),
            transformResponse: (res: any) => {
                return res.data;
            },
            providesTags: ['banner']
        }),
        updateBannerLinks: builder.mutation({
            query: ({ data, bid }) => ({
                url: `/banner/${bid}`,
                method: "PATCH",
                body: data
            }),
            transformResponse: (res: any) => {
                return res.data;
            },
            invalidatesTags: ['banner']
        })
    })
})

export const { useGetWebBannerLinksQuery, useUpdateBannerLinksMutation } = bannerApi;