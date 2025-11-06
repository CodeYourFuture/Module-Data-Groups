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

test("creates a lookup for European and Asian countries", () => {
  expect(
    createLookup([
      ["FR", "EUR"],
      ["IN", "INR"],
    ])
  ).toEqual({ FR: "EUR", IN: "INR" });
});
