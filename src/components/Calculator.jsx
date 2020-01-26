import React, { Component } from 'react';
import Display from '../components/Display';

class Calculator extends Component {
    state = {
      // value to be displayed in <Display />
      displayValue: '0',
      // values to be displayed in number <Keys />
      numbers: [],
      // values to be displayed in operator <Keys />
      operators: [],
      // operator selected for math operation
      selectedOperator: '',
      // stored value to use for math operation
      storedValue: '',
    }
  
    callOperator = () => {
      console.log('call operation');
    }
  
    setOperator = () => {
      console.log('set operation');
    }
  
    updateDisplay = () => {
      console.log('update display');
    }
  
    render = () => {

      const {displayValue} = this.state;
      return (
        <div className="calculator-container" >
        <Display displayValue={displayValue} />
        </div>
      );
    }
  }
  
  export default Calculator;