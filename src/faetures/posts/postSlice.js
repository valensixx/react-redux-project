import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Laerning Redux Toolkit', content: 'I have heard it is awsome.'},
    { id: '2', title: 'Slices...', content: 'Reminder: To order pizza.'}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postSlice.reducer