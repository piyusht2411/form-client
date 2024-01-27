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
          
        }),
        logoutUser: builder.query<void, void>({
            query:()=> `/logout`
            
        })
     
    }),
    
  })
  export const {useRegisterUserMutation,useLoginUserMutation, useLazyLogoutUserQuery} = userApi;