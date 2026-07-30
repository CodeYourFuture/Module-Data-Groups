const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", function () {
  const arr = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["BD", "BDT"],
  ];
  const currentOutput = createLookup(arr);
  const targetOutput = {
    US: "USD",
    CA: "CAD",
    BD: "BDT",
  };

  expect(currentOutput).toEqual(targetOutput);
});
