import { Home } from '../../client/core/Home'
import React from 'react';
import { shallow } from 'enzyme';
import advices from '../fixtures/advices';

test('should render Home correctly with 3 advices',()=>{
  const wrapper = shallow(<Home classes={{}}/>);
  wrapper.setState({cards: advices})
  expect(wrapper).toMatchSnapshot();
});

test('should render Home correctly with 3 advices',()=>{
  const wrapper = shallow(<Home classes={{}}/>);
  expect(wrapper.find('WithStyles(Card)').length).toBe(3);
});
