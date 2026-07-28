const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  expect([
    ["US", "USD"],
    ["CA", "CAD"],
    ["UK", "GBP"],
  ]).toEqual({ US: "USD", CA: "CAD", UK: "GBP" });
});
