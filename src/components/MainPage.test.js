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
