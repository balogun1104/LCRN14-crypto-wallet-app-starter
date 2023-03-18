import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './modal/createSlice'

export const store = configureStore({
    reducer: {
         modal: modalReducer
    }
})