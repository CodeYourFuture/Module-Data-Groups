const createLookup = require("./lookup.js");

test("Returns an object mapping country codes to currency codes", () => {
  const countryCurrencyPairs = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
  ];

  const expectedOutput = {
    US: "USD",
    CA: "CAD",
    GB: "GBP",
  };

  const result = createLookup(countryCurrencyPairs);
  expect(result).toEqual(expectedOutput);
});
