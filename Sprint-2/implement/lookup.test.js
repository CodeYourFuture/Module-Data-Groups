const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  expect(createLookup([["US", "USD"], ["CA", "CAD"]])).toEqual({ US: "USD", CA: "CAD" });
});

test("returns empty object for empty array", () => {
  expect(createLookup([])).toEqual({});
});

test("creates lookup for a single pair", () => {
  expect(createLookup([["GB", "GBP"]])).toEqual({ GB: "GBP" });
});
