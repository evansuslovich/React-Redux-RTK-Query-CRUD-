// where we are going to create our methods to interact with the api it essentially replaces axios 
// and pulls that code out of our component logicand over here in a seperate api slice 
// how we name things in redux 


import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// createApi 
// fetchBaseQuery 
// imports tools for react 



// object 
export const apiSlice = createApi({
    
    // first thing we do is define the reducer path 
    // defaults to this (good to include)
    reducerPath: 'api',
    // baseQuery uses fetchBaseQuery 
    // baseURL: looks very familiar with axios (using json server)
    baseQuery: fetchBaseQuery({baseUrl:  'http://localhost:3500' }),

    //we're defining endpoints for the api to interact with (builder) cases 
    endpoints : (builder) => ({
        // methods 
        

        // get all of the todos
        getTodos: builder.query({
            query : () => '/todos', // gets it using an http get method 
        })
    })
})

export const {
    useGetTodosQuery
} = apiSlice