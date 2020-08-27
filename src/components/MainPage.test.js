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
