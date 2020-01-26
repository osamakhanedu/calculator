import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../components/Calculator';
import Display from '../components/Display';


describe('Calculator Component', () => {

    let wrapper;
  
    beforeEach(() => wrapper = shallow(<Calculator />));
  
    it('should render div',()=>{   
      expect(wrapper.find('div').length).toEqual(1);
    })
    
    it('should render the Display Component', () => {
      expect(wrapper.containsMatchingElement(<Display displayValue={wrapper.instance().state.displayValue}  />)).toEqual(true);
    });
    
    
  });
  