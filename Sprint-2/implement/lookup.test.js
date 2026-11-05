const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  const pairs = [
    ["US", "USD"],
    ["CA", "CAD"],
  ];
  const result = createLookup(pairs);

  expect(result).toEqual({ US: "USD", CA: "CAD" });
});
