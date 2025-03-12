import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseAPI = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.expertpeople.xyz", credentials:'include' }),
    reducerPath: "baseApi",
    tagTypes: ["exampleTag"],
    endpoints: () => ({
    }),
})

export default baseAPI;
