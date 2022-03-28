import './App.css';
import React, { Component } from "react";

class Main extends Component {
  state = {
    counter: 1000,
  };

  addOneHandler = ()=> {
    console.log('wow you can really dance');
  };


    render () {
      return (
        <div>
            <div className="circle">
                <div className = "current-sum">{this.state.counter}</div>
            </div>

            <div className="button-container">
            <button type="button" className="button" >Add five</button>
            <button type="button" className="button">Add one</button>
            <button type="button" className="button" >Reset</button>
            <button type="button" className="button" >Remove one</button>
            <button type="button" className="button"onClick={this.addOneHandler} >Remove five</button>
            </div>

        </div>
    );
    }
};

export default Main;