import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Homepage from './Homepage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    search: '',
    isPending: false,
  };
  wrapper = shallow(<Homepage {...mockProps} />);
});

it('expect to render Homepage component', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filter robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 2,
        name: 'John',
        email: 'john@gmail.com',
      },
    ],
    searchField: 'john',
    isPending: false,
  };
  const wrapper2 = shallow(<Homepage {...mockProps2} />);

  expect(wrapper2.instance().filteredRobots()).toEqual([
    {
      id: 2,
      name: 'John',
      email: 'john@gmail.com',
    },
  ]);
});

it('filter robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 2,
        name: 'John',
        email: 'john@gmail.com',
      },
    ],
    searchField: 'a',
    isPending: false,
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<Homepage {...mockProps3} />);

  expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
});

it('input colors', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 2,
        name: 'John',
        email: 'john@gmail.com',
      },
    ],
    searchField: 'a',
    isPending: false,
  };
  const setColor = jest.fn();
  const wrapper = mount(<Homepage {...mockProps} />);
  expect(wrapper.state()).toEqual({ color1: '', color2: '' });
});
