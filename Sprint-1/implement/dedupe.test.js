const dedupe = require("./dedupe.js");

// Case 1: Return an empty array when input is []
test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});
