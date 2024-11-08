import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://nokshi-dhara-backend-bay.vercel.app/app/v1',
        credentials:'include'
    }),
    tagTypes: ['auth','package','order','banner'],
    endpoints: () => ({})
})

export default baseApi;