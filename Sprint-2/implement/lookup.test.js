const createLookup = require("./lookup.js");
describe("createLookup function", () => {
  test("creates a country currency code lookup for multiple codes", () => {
    const countryCurrencyPairs = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["GB", "GBP"],
    ];
    const result = createLookup(countryCurrencyPairs);
    expect(result).toEqual({
      US: "USD",
      CA: "CAD",
      GB: "GBP",
    });
  });

  test("returns an empty object for an empty array", () => {
    const result = createLookup([]);
    expect(result).toEqual({});
  });

  test("handles a single pair", () => {
    const result = createLookup([["JP", "JPY"]]);
    expect(result).toEqual({ JP: "JPY" });
  });

  test("overwrites duplicate keys with the latest value", () => {
    const countryCurrencyPairs = [
      ["US", "USD"],
      ["US", "USN"],
    ];
    const result = createLookup(countryCurrencyPairs);
    expect(result).toEqual({ US: "USN" });
  });

  test("handles non-string values gracefully", () => {
    const countryCurrencyPairs = [
      ["US", "USD"],
      ["IN", 123],
    ];
    const result = createLookup(countryCurrencyPairs);
    expect(result).toEqual({
      US: "USD",
      IN: 123,
    });
  });
});
