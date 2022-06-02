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
        }), 


        //addTodo method: different because instead of builder.query it is builder dot mutation 
        // and and the rex tof our methods are going to be mutations which is going to mean we are 
        // not just requesting or querying the data but instead modifying (mutating)
        addTodo: builder.mutation({

            query: (todo) => ({
                //we are putting a url instead of just having a default 
                url: '/todos',
                //which method are we using? because it can be patch or delete 
                method: 'POST',
                // in the body of this request we are going to just putting 
                body: todo
            })
        }),


        // update method
        updateTodo: builder.mutation({
            query: (todo) => ({
                // the url is different we are using a template literal with its specific id 
                url: `/todos/${todo.id}`,
                // we can use PATCH or PUT (patch is updating part of the record )
                method: 'PATCH', 
                body: todo
            })
        }), 

        deleteTodo: builder.mutation({
            // destructuring the id from the todo
            query: ({ id }) => ({
                // passing the id in 
                url: `/todos/${id}`,
                // method is delete
                method: 'DELETE', 
                // the body only contains the id because its the only thing we need to delete the todo
                body: id
            })
        })


    })
})

export const {
    useGetTodosQuery,

    // all mutations 
    useAddTodoMutation,
    useUpdateTodoMutation, 
    useDeleteTodoMutation

    
} = apiSlice