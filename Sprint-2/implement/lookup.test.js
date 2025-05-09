const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  const countryCurrencyPairs = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
  ];

  const expectedLookup = {
    US: "USD",
    CA: "CAD",
    GB: "GBP",
  };

  expect(createLookup(countryCurrencyPairs)).toEqual(expectedLookup);
});


test("returns an empty object for an empty array", () => {
  expect(createLookup([])).toEqual({});
});


test("throws an error if input is not an array", () => {
  expect(() => createLookup(null)).toThrow("Input must be an array of arrays");
});


test("throws an error if a pair does not contain two strings", () => {
  expect(() => createLookup([["US", 123]])).toThrow(
    "Each pair must contain two strings"
  );
});
