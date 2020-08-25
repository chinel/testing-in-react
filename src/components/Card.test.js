import { shallow, mount, render } from "enzyme";
import Card from "./Card";
import React from "react";

it("shallow renders the card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
