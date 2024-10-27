import baseApi from "./baseApi";





const authApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        loginUser:builder.mutation({
            query:(data)=>({
                url:'/admin/login',
                method:"POST",
                body:data
            })
        })
    })
})

export const {useLoginUserMutation} = authApi;