import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit"; // generates unique id's

const initialState =() => {
    todos:[{id:1 , text:"Hello World"}]
}

export const todolist = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state , action) => {
            const todo={
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})