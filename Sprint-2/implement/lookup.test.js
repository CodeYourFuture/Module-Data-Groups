const createLookup = require("./lookup.js");

describe("createLookup", () => {
  test("creates a country currency code lookup for multiple codes", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
    ];
    const result = createLookup(input);
    expect(result).toEqual({ US: "USD", CA: "CAD" });
  });

  test("creates a lookup with a single code pair", () => {
    const input = [["GB", "GBP"]];
    const result = createLookup(input);
    expect(result).toEqual({ GB: "GBP" });
  });

  test("creates an empty lookup with an empty array", () => {
    const input = [];
    const result = createLookup(input);
    expect(result).toEqual({});
  });
});
