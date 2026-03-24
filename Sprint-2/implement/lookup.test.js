const createLookup = require("./lookup.js");

describe("createLookup()", () => {
  test("creates a country currency code lookup for multiple codes", () => {
    const pairs = [
      ["US", "USD"],
      ["CA", "CAD"],
    ];

    expect(createLookup(pairs)).toEqual({
      US: "USD",
      CA: "CAD",
    });
  });

  test("returns an empty object for an empty array", () => {
    expect(createLookup([])).toEqual({});
  });

  test("overwrites duplicate keys with the last value", () => {
    const pairs = [
      ["US", "USD"],
      ["US", "USN"],
    ];

    expect(createLookup(pairs)).toEqual({
      US: "USN",
    });
  });

  test("throws an error when input is not an array", () => {
    expect(() => createLookup("invalid")).toThrow();
  });
});
