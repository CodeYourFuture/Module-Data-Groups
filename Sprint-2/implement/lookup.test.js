const createLookup = require("./lookup.js");


describe("createLookup", () => {
  it("creates a country currency code lookup for multiple codes", () => {
    const arrayOfArrays = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["UK", "GBP"],
    ];
    expect(createLookup(arrayOfArrays)).toEqual({
      US: "USD",
      CA: "CAD",
      UK: "GBP",
    });
  });
});