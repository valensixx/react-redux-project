import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Laerning Redux Toolkit', content: 'I have heard it is awsome.'},
    { id: '2', title: 'Slices...', content: 'Reminder: To order pizza.'}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action){
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions

export default postSlice.reducer