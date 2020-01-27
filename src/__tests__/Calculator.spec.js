import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../components/Calculator';
import Display from '../components/Display';
import Keypad from '../components/Keypad';


describe('Calculator Component', () => {

    let wrapper;
  
    beforeEach(() => wrapper = shallow(<Calculator />));

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  
    it('should render div',()=>{   
      expect(wrapper.find('div').length).toEqual(1);
    })
    
    it('should render the Display and Keypad Components', () => {
      expect(wrapper.containsAllMatchingElements([
        <Display displayValue={wrapper.instance().state.displayValue} />,
        <Keypad
          callOperator={wrapper.instance().callOperator}
          numbers={wrapper.instance().state.numbers}
          operators={wrapper.instance().state.operators}
          setOperator={wrapper.instance().setOperator}
          updateDisplay={wrapper.instance().updateDisplay}
        />
      ])).toEqual(true);
    });
    
    
  });
  