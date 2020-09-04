import * as actions from "./actions";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

it("Should create an action to search robots", () => {
  const text = "wooo";
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text,
  };

  expect(actions.setSearchField(text)).toEqual(expectedAction);
});
