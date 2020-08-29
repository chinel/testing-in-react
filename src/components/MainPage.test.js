import { shallow, mount, render } from "enzyme";
import MainPage from "./MainPage";
import React from "react";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("render main page without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robot correctly", () => {
  const props = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "john",
        email: "john@example.com",
      },
    ],
    searchField: "j",
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...props} />);
  expect(wrapper2.instance().filteredRobots([])).toEqual([
    {
      id: 3,
      name: "john",
      email: "john@example.com",
    },
  ]);
});

it("filters robot correctly 2", () => {
  const props2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "john",
        email: "john@example.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };

  const filtered_Robots = [];
  const wrapper3 = shallow(<MainPage {...props2} />);
  expect(wrapper3.instance().filteredRobots([])).toEqual(filtered_Robots);
});
