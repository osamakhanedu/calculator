import React from 'react';
import { shallow } from 'enzyme';
import Display from '../components/Display';


describe('Display Component', () => {

    let wrapper;
  
    beforeEach(() => wrapper = shallow(<Display displayValue={''} />));

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  
    it('should render div',()=>{   
      expect(wrapper.find('div').length).toEqual(1);
    })

     
    it('should render the value of displayValue',()=>{  
        wrapper.setProps({ displayValue: 'test' }) 
        expect(wrapper.text()).toEqual('test');
      })
  

    
   
    
    
  });
  