import { combineReducers, createStore } from "redux";
import countReducer from "./countReducer";



const rootReducer = combineReducers({
    count: countReducer,
    anotherValue: 10
  })
  
export const store = createStore(rootReducer);


