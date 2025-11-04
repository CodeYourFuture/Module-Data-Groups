const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
  ];
  const result = createLookup(input);

  expect(result).toEqual({
    US: "USD",
    CA: "CAD",
    GB: "GBP",
  });
});

test("returns empty object when given an empty array", () => {
  expect(createLookup([])).toEqual({});
});

test("returns empty object when given invalid input", () => {
  expect(createLookup(null)).toEqual({});
  expect(createLookup("not an array")).toEqual({});
});

