


// plain redux
// export const store = createStore(rootReducer);

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";


// redux toolkit
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

