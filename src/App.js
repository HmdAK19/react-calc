import { Component } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import ClearButton from './Components/ClearButton/ClearButton';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      result: 0,
      isClickedResult: false
    };
  }

  addToInput = val => {
    if(this.state.isClickedResult)
    {
      this.setState({
        input: val,
        result: "",
        isClickedResult: false
      });
    }
    else
      this.setState({
        input: this.state.input + val,
        result: ""
      })
  }

  handleEqual = () => {
    try {
      let result = math.evaluate(this.state.input);
      this.setState({
        result: result, 
        isClickedResult: true
      });
    }
    catch {
      this.setState({
        result: "Error...!",
        isClickedResult: true
      })
    }
  }

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} result={this.state.result}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>%</Button>
            <ClearButton handleClear={() => this.setState({input: "", result: 0})}>C</ClearButton>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.addToInput}>(</Button>
            <Button handleClick={this.addToInput}>)</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
