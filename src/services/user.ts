import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query:(body)=>({
                url: '/register',
                method: 'POST',
                body: body,
            }),
          
        }),
        loginUser: builder.mutation({
            query:(body)=>({
                url: '/login',
                method: 'POST',
                body: body,
            }),
          
        })
     
    }),
    
  })
  export const {useRegisterUserMutation,useLoginUserMutation} = userApi;