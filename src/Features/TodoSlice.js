import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit"; // generates unique id's

const initialState =() => {
    todos:[{id:1 , text:"Hello World"}]
}

export const todolist = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state , action) => {},
        removeTodo : () => {}
    }
})