import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CardList from './CardList';

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John',
      username: 'John',
      email: 'john@gmail.com',
    },
  ];
  const wrapper = shallow(<CardList robots={mockRobots} />);
  expect(shallowToJson(wrapper, { mode: 'deep' })).toMatchSnapshot();
});
