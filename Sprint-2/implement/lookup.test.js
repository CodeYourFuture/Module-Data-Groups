const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  expect(
    createLookup([
      ["US", "USD"],
      ["CA", "CAD"],
    ])
  ).toEqual({ US: "USD", CA: "CAD" });
});
