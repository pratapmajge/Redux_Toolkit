import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './Features/TodoSlice.js'

export const Store = configureStore({
    reducer: todoReducer
})

export default Store