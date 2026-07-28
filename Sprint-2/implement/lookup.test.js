const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  expect([["UK", "GBP"]]).toEqual({ UK: "GBP" });
});
test("creates an empty  country currency code returns empty lookup  ", () => {
  expect([]).toEqual({});
});

test("for multiple country currency returns multiple lookup", () => {
  expect([
    ["UK", "GBP"],
    ["ET", "ETB"],
    ["FR", "EUR"],
  ]).toEqual({ UK: "GBP", ET: "ETB", FR: "EUR" });
});
