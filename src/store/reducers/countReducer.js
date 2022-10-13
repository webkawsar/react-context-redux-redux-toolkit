import { DECREMENT, INCREMENT, RESET } from "../action";





const initialState = { value: 0 }
const countReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1
      }

    case DECREMENT:
      return {
        value: state.value - 1
      }

    case RESET:
      return { value: 0 }
  
    default:
      return {
        value: 0
      }
  }
}

export default countReducer;