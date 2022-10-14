import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, reset } from "../store/features/counter/counterSlice";



const Toolkit = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    


  return (
    <div>
        <h2>React Redux + Toolkit</h2>
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>{count.value}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(incrementByValue(10))}>Increment by value</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    </div>
  );
};

export default Toolkit;
