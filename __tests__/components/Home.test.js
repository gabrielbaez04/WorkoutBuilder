import Home from '../../client/core/Home'
import React from 'react';
import { mount } from 'enzyme';

describe("Home", () => {
  let props;
  let mountedHome;
  const home = () => {
    if (!mountedHome) {
      mountedHome = mount(
        <Home {...props} />
      );
    }
    return mountedHome;
  }

  beforeEach(() => {
    props = {
    };
    mountedHome = undefined;
  });
  
  // All tests will go here
  it("Always renders 3 Advices", () => {
    const advices = home().find("Card");
    expect(advices.length).toBe(3);
  });
});