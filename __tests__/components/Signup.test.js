import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from '../../client/user/Signup';

let wrapper, updateMenu;

beforeEach(()=>{
    updateMenu = jest.fn();
    wrapper = shallow(<Signup classes={{}} location={{updateMenu}}/>);
});

test('should render Signup correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});