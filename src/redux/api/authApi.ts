import baseApi from "./baseApi";





const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/admin/login',
                method: "POST",
                body: data
            })
        }),
        dashboardMetaData: builder.query({
            query: () => ({
                url: '/admin',
                method: "GET"
            }),
            transformResponse: (res: any) => {
                return res.data;
            }
        })
    })
})

export const { useLoginUserMutation, useDashboardMetaDataQuery } = authApi;