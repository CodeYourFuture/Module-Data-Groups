const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
  ];
  const expected = {
    US: "USD",
    CA: "CAD",
    GB: "GBP",
  };

  expect(createLookup(input)).toEqual(expected);
});

test("creates a country currency code lookup for an empty array", () => {
  const input = [];
  const expected = {};

  expect(createLookup(input)).toEqual(expected);
});
