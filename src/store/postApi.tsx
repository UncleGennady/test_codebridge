import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const weatherApi = createApi({
    reducerPath:"postApi",
    baseQuery:fetchBaseQuery({baseUrl:'http://api.openweathermap.org/'}),
    endpoints: (builder) => ({
        // getCity: builder.query({
        //     query: (city) =>({
        //         url: `geo/1.0/direct?q=${city}&limit=5&appid=bbbf44714a7a1dc9ab1b9a0db75f9682`
        //     })
        // }),
    }),

})

export const{ } = weatherApi;