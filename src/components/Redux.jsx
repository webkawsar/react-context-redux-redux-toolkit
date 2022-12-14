import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/actionCreator";

// store.subscribe(() => console.log(store.getState()))
// store.dispatch(increment());
// store.dispatch(increment());




const Redux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  

  return (
    <div>
        <h2>React Redux</h2>
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>{count.value}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    </div>
  );
};

export default Redux;
