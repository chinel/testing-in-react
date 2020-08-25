import { shallow, mount, render } from "enzyme";
import CardList from "./CardList";
import React from "react";

it("shallow renders the CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "johnjohn",
      email: "john@gmail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
