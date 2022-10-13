import React from 'react';
import { store } from './store';
import { INCREMENT } from './store/action';



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