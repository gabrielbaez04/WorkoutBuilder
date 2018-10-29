import App from '../../client/App';
import React from 'react';
import { shallow } from 'enzyme';

describe("App", ()=>{
    const wrapper = shallow(<App/>);

    it("Should render Main Router", () => {
        expect(wrapper.find('MainRouter').length).toEqual(1);
      });
    
})