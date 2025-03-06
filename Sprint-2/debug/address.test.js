const address = require("./address.js");

test("given an address, returns the houseNumber", function () {
  const address = {
    houseNumber: 42,
    street: "Imaginary Road",
    city: "Manchester",
    country: "England",
    postcode: "XYZ 123",
  };
  const currentOutput = address.houseNumber;
  const targetOutput = 42;

  expect(currentOutput).toBe(targetOutput);
});
