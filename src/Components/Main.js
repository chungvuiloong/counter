
import React, { Component } from "react";
import Button from "./Button";
import classes from "./Circles.module.css";

class Main extends Component {
  state = {
    counter: 0,
  };

  addFiveHandler = ()=> {
    this.setState({
      counter: this.state.counter + 5,
    });
  };


  addOneHandler = ()=> {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  resetHandler = ()=> {
    this.setState({
      counter: this.state.counter == 0,
    });
  };

  minusOneHandler = ()=> {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  minusFiveHandler = ()=> {
    this.setState({
      counter: this.state.counter - 5,
    });
  };

    render () {
      return (
        <div>
            <div className={classes.circle}>
                <div className = "current-sum">{this.state.counter}</div>
            </div>

            <Button onClick={this.addFiveHandler} value="5"/>
            <div className="button-container">
            
            <button type="button" className="button" onClick={this.addFiveHandler}>Add five</button>
            <button type="button" className="button" onClick={this.addOneHandler}>Add one</button>
            <button type="button" className="button" onClick={this.resetHandler}>Reset</button>
            <button type="button" className="button" onClick={this.minusOneHandler}>Remove one</button>
            <button type="button" className="button" onClick={this.minusFiveHandler}>Remove five</button>
            </div>

        </div>
    );
    }
};

export default Main;