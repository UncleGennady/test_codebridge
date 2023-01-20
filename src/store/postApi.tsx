import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from './../modal'

export const postApi = createApi({
    reducerPath:"postApi",
    baseQuery:fetchBaseQuery({baseUrl:'https://api.spaceflightnewsapi.net/'}),
    endpoints: (builder) => ({
        getPost: builder.query<IPost[], void>({
            query: () =>({
                url: `v3/articles`
            })
        }),
        getPostById: builder.query({
            query: (id) =>({
                url: `v3/articles/${id}`
            })
        }),
    }),

})

export const{useGetPostQuery, useGetPostByIdQuery  } = postApi;