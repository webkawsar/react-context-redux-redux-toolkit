import React from 'react';



// store.subscribe(() => console.log(store.getState()))
// store.dispatch(increment());
// store.dispatch(increment());


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