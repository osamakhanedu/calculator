import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../components/Calculator';


describe('Calculator Component', () => {

    let wrapper;
  
    beforeEach(() => wrapper = shallow(<Calculator />));
  
    it('should render div',()=>{   
      expect(wrapper.find('div').length).toEqual(1);
    })
  
  
    // it('should render calculator component',()=>{
    //    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
    // })
    
  });
  