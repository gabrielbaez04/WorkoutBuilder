import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from '../../client/user/Signup';
import "isomorphic-fetch"

let wrapper, updateMenu;

beforeEach(() => {
    updateMenu = jest.fn();
    wrapper = shallow(<Signup classes={{}} location={{ updateMenu }} />);
});

test('should render Signup correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should set name on name change', () => {
    const value = 'Gabriel';
    wrapper.find('#name').prop('onChange')({ target: { value } });
    expect(wrapper.state('name')).toBe(value);
});

test('should set email on email change', () => {
    const value = 'Gabrielbaez04@gmail.com';
    wrapper.find('#email').prop('onChange')({ target: { value } });
    expect(wrapper.state('email')).toBe(value);
});

test('should set password on password change', () => {
    const value = 'gabriel123';
    wrapper.find('#password').prop('onChange')({ target: { value } });
    expect(wrapper.state('password')).toBe(value);
});
