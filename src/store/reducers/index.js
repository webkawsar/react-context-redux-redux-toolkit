import { combineReducers } from "redux";
import countReducer from "./countReducer";


const rootReducer = combineReducers({
    count: countReducer,
    anotherValue: 10
})

export default rootReducer;