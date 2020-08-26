import { shallow, mount, render } from "enzyme";
import CounterButton from "./CounterButton";
import React from "react";

it("shallow renders the CounterButton component", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("correctly increment the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 4 });
  wrapper.find('[id="counter"]').simulate("keypress");
  expect(wrapper.state()).toEqual({ count: 4 });
  console.log(wrapper.props());
});
