import React, { Component } from 'react';

 export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: 0,
    };
  }

  handleButtonClick = (value) => {
    this.setState((prevState) => ({
      input: prevState.input + value,
    }));
  };

  handleCalculate = () => {
    try {
      this.setState({
       // result: eval(this.state.input), // Note: Using eval can be dangerous in real-world applications, consider alternative approaches for safety.
      });
    } catch (error) {
      this.setState({
        result: 'Error',
      });
    }
  };

  handleClear = () => {
    this.setState({
      input: '',
      result: 0,
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.input}
            readOnly
          />
        </div>
        <div>
          <button onClick={() => this.handleButtonClick('1')}>1</button>
          <button onClick={() => this.handleButtonClick('2')}>2</button>
          <button onClick={() => this.handleButtonClick('3')}>3</button>
          <button onClick={() => this.handleButtonClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => this.handleButtonClick('4')}>4</button>
          <button onClick={() => this.handleButtonClick('5')}>5</button>
          <button onClick={() => this.handleButtonClick('6')}>6</button>
          <button onClick={() => this.handleButtonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => this.handleButtonClick('7')}>7</button>
          <button onClick={() => this.handleButtonClick('8')}>8</button>
          <button onClick={() => this.handleButtonClick('9')}>9</button>
          <button onClick={() => this.handleButtonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={() => this.handleButtonClick('0')}>0</button>
          <button onClick={this.handleCalculate}>=</button>
          <button onClick={this.handleClear}>C</button>
          <button onClick={() => this.handleButtonClick('/')}>/</button>
        </div>
        <div>
          <p>Result: {this.state.result}</p>
        </div>
      </div>
    );
  }
}


