import baseApi from "./baseApi";


const chargeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateDeliveryCharge: builder.mutation({
            query: ({ data, cid }) => ({
                url: `/charge/${cid}`,
                method: "PATCH",
                body: data
            }),
            transformResponse: (res: any) => {
                return res.data
            },
        }),
        getDeliveryCharge: builder.query({
            query: () => ({
                url: '/charge',
                method: "GET"
            }),
            transformResponse:(res:any)=>{
                return res.data;
            }
        })
    })
})

export const { useUpdateDeliveryChargeMutation, useGetDeliveryChargeQuery } = chargeApi;