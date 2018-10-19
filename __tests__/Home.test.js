import Home from '../client/core/Home'
import React from 'react';
import {shallow, mount} from 'enzyme';
import { withStyles } from '@material-ui/core/styles';

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
  it("always renders 3 Advices", () => {
    const advices = home().find("Card");
    expect(advices.length).toBe(3);
  });
});