import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../faetures/counter/counterSlice';
import postReducer from '../faetures/posts/postSlice';

export const store = configureStore({
    reducer:{
        counter: counterReducer, 
        posts: postReducer,
    }
})