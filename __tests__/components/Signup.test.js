import Signup from '../../client/user/Signup';
import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import "isomorphic-fetch"

describe("Signup", ()=>{
    it("renders",()=>{
        const wrapper = shallow(<Signup/>);
        expect(wrapper.exists()).toBe(true);
    });
    it("Should render 'Name is required'",()=>{
        const wrapper = shallow(<Signup location={{updateMenu:()=>{}}}/>);
        //const SignupState = wrapper.state('error');
        //wrapper.find("form").simulate("submit");
        expect(SignupState).toEqual('');
    })

})