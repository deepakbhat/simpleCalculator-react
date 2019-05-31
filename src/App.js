import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonHolder from './ButtonHolder';
import OperatorHolder from './OperatorHolder';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentLabel: "", result: "" };
    this.updateButtonsPressed = this.updateButtonsPressed.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }

  updateButtonsPressed(buttonLabel) {
    var currentLabel = this.state.currentLabel;
    var updatedLabel = currentLabel + buttonLabel;
    console.log(updatedLabel);

    this.setState({ currentLabel: updatedLabel })
  }

  evaluate() {
    var s = this.state.currentLabel;
    var total = 0, s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while (s.length) {
      total += parseFloat(s.shift());
    }

    this.setState({ result: total });
  }

  render() {
    return (
      <div className="App">
        <ButtonHolder updateButtonsPressed={this.updateButtonsPressed} />
        <OperatorHolder updateButtonsPressed={this.updateButtonsPressed} />
        <button onClick={this.evaluate}> = </button>
        <label> {this.state.result} </label>
      </div>
    );
  }
}

export default App;
;