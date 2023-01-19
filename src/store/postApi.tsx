import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const postApi = createApi({
    reducerPath:"postApi",
    baseQuery:fetchBaseQuery({baseUrl:'https://api.spaceflightnewsapi.net/'}),
    endpoints: (builder) => ({
        getPost: builder.query({
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