import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Calculator from '../components/Calculator';

describe('App Component', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render <div />',()=>{   
    expect(wrapper.find('div').length).toEqual(1);
  })


  it('should render Calculator component',()=>{
     expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  })
  
});
