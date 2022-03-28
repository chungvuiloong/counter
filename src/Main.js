import './App.css';
import React, { useState } from "react";

const Main = () => {
    const [count, setCount] = useState(0);


    let incrementFive = () => {
        setCount(count + 5);
      };

  let increment = () => {
    setCount(count + 1);
  };

  let reset = () => {
    setCount(0);
  };

  let decrement = () => {
    setCount(count - 1);
  };

  let decrementFive = () => {
    setCount(count - 5);
  };

  

    return (
        <div>
            <div className="circle">
                <div className = "current-sum">{count}</div>
            </div>

            <div className="button-container">
            <button type="button" className="button" onClick={incrementFive}>Add five</button>
            <button type="button" className="button" onClick={increment}>Add one</button>
            <button type="button" className="button" onClick={reset}>Reset</button>
            <button type="button" className="button" onClick={decrement}>Remove one</button>
            <button type="button" className="button" onClick={decrementFive}>Remove five</button>
            </div>

        </div>

        





    );
};

export default Main;