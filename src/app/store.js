import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../faetures/counter/counterSlice';

export const store = configureStore({
    reducer:{
        counter: counterReducer, 
    }
})