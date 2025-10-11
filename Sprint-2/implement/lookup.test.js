const createLookup = require("./lookup.js");

// Create a lookup object of key value pairs from an array of code pairs

// Acceptance Criteria:

// Given
//  - An array of arrays representing country code and currency code pairs
//    e.g. [['US', 'USD'], ['CA', 'CAD']]
test("creates a country currency code lookup for multiple codes", () => {
  expect(
    createLookup([
      ["US", "USD"],
      ["CA", "CAD"],
    ])
  ).toEqual({ US: "USD", CA: "CAD" });
});

test("creates a country currency code with mixed nesting and extra layers lookup for multiple codes", () => {
  expect(
    createLookup([["US", "USD"], [["CA", "CAD"]], [[["JP", "JPY"]]]])
  ).toEqual({ US: "USD", CA: "CAD", JP: "JPY" });
});
