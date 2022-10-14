import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';



export const getAllTodos = createAsyncThunk('todos/getAll', async(data, thunkApi) => {

    try {

        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data;
        
    } catch (error) {
       
        return thunkApi.rejectWithValue('Internal Server Error');
    }
})



const initialState= {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    todos: null
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllTodos.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllTodos.fulfilled, (state, action) => {
            state.isError = false;
            state.isSuccess = true;
            state.isLoading = false;
            state.todos = action.payload;
        })
        .addCase(getAllTodos.rejected, (state, action) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.todos = null;
            state.message = action.payload;
        })
    }
})

export default todoSlice.reducer;