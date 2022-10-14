


// plain redux
// export const store = createStore(rootReducer);

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import todoReducer from "./features/todo/todoSlice";


// redux toolkit
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
})

