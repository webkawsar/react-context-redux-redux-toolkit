import React from 'react';
import { createStore } from 'redux';



const INCREMENT = 'INCREMENT';

const initialState = { value: 0 }
const countReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1
      }
  
    default:
      return {
        value: 0
      }
  }
}


const store = createStore(countReducer);
store.subscribe(() => console.log(store.getState()))

const increment = () => ({ type: INCREMENT })
store.dispatch(increment());
store.dispatch(increment());




const App = () => {
  
  return (
    <div style={{textAlign: 'center', marginTop: '100px'}}>
      <h2>0</h2>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
};

export default App;