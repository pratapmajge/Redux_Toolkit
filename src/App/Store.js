import {configureStore} from '@reduxjs/toolkit';
import removeTodo from './Features/TodoSlice.js'

export const Store = configureStore({
    reducer: removeTodo
})

export default Store