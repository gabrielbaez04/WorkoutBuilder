import React from 'react';
import {
  mount, it, expect, beforeEach, describe,
} from 'enzyme';
import Home from '../client/core/Home';

describe('Home', () => {
  let props;
  let mountedHome;
  const home = () => {
    if (!mountedHome) {
      mountedHome = mount(
        <Home {...props} />,
      );
    }
    return mountedHome;
  };

  beforeEach(() => {
    props = {
    };
    mountedHome = undefined;
  });

  // All tests will go here
  it('always renders 3 Advices', () => {
    const advices = home().find('Card');
    expect(advices.length).toBe(3);
  });
});
