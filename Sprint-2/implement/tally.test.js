const tally = require("./tally.js");

describe("tally", () => {
  // Case 1: Returns an empty object when an empty array is passed to tally
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });
});
