import { shallow, mount, render } from "enzyme";
import App from "./App";
import React from "react";

it("shallow renders the App component", () => {
  const mockStore = {
    robots: [],
    searchField: "",
  };
  expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
});
