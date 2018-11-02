import Signup from '../../client/user/Signup';
import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import "isomorphic-fetch"
import {create} from '../../client/user/api-user';
const createUser = jest.mock("create", () => jest.fn());

describe("Signup", ()=>{
        
    it("renders",()=>{
        const wrapper = shallow(<Signup/>);
        expect(wrapper.exists()).toBe(true);
    });
    describe("Validate Form",()=>{
        it("Should render 'Name is required'",()=>{
            const wrapper = mount(shallow(<Signup location={{updateMenu:()=>{}}}/>).get(0));
            const resp = {data: [{error: 'Name is required'}]};
            createUser.mockReturnValueOnce(resp);
            wrapper.find(".form").simulate("submit");
           // wrapper.setState({error:'Name is required'});

            if(wrapper.state().error !== '') 
            {
                const err = wrapper.find("span.spanError").text();
                expect(err).toEqual('Name is required');
            }
            wrapper.unmount();
        });
        
    });

})