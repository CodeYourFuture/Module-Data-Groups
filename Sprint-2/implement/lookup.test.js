const createLookup = require("./lookup.js");

test("create a country currency code lookup for a single codes", () => {
  expect(createLookup([["UK", "GBP"]])).toEqual({ UK: "GBP" });
});
test("creates an empty country currency code returns empty lookup", () => {
  expect(createLookup([])).toEqual({});
});
test("creates a country currency code lookup for multiple codes", () => {
  expect(
    createLookup([
      ["US", "USD"],
      ["CA", "CAD"],
      ["UK", "GBP"],
    ])
  ).toEqual({ US: "USD", CA: "CAD", UK: "GBP" });
});
