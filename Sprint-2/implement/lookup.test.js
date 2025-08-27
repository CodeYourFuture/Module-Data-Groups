const createLookup = require("./lookup.js");

describe("creates a country currency code lookup for multiple codes", () => {
  test("I will return an object with keys as country codes and values as corresponding currency codes when array representing country code and currency codes pairs is passed", () => {
    const countryCurrencyPairs = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["GUI", "GNF"],
    ];
    const currentOutput = createLookup(countryCurrencyPairs);
    const targetOutput = { US: "USD", CA: "CAD", GUI: "GNF" };
    expect(currentOutput).toEqual(targetOutput);
  });

  test("return an empty object if param is an empty array", () => {
    const countryCurrencyPairs = [];
    const currentOutput = createLookup(countryCurrencyPairs);
    const targetOutput = {};
    expect(currentOutput).toEqual(targetOutput);
  });
});
