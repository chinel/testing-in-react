import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialSearch = {
    searchField: "",
  };
  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});

describe("requestsRobots", () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
  };

  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "johnjohn",
      email: "john@gmail.com",
    },
  ];

  it("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
        payload: { isPending: true },
      })
    ).toEqual({
      robots: [],
      isPending: true,
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: { isPending: false, robots: mockRobots },
      })
    ).toEqual({ robots: mockRobots, isPending: false });
  });

  it("should handle REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: { error: "No" },
      })
    ).toEqual({ robots: [], isPending: false, error: "No" });
  });
});
