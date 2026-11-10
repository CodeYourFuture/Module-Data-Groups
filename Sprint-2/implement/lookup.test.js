const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  expect(
    createLookup([
      ["US", "USD"],
      ["CA", "CAD"],
    ])
  ).toEqual({ US: "USD", CA: "CAD" });
});

test("creates a lookup for single pair", () => {
  expect(createLookup([["US", "USD"]])).toEqual({ US: "USD" });
});

test("return an empty object for an empty array", () => {
  expect(createLookup([])).toEqual({});
});
