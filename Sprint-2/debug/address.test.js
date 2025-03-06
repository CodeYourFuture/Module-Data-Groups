const address = require("./address.js");

function gethouseNumber(obj) {
  return address.houseNumber;
}

test("given an address, returns the houseNumber", function () {
  const address = {
    houseNumber: 42,
    street: "Imaginary Road",
    city: "Manchester",
    country: "England",
    postcode: "XYZ 123",
  };
  const currentOutput = gethouseNumber(address);
  const targetOutput = 42;

  expect(currentOutput).toStrictEqual(targetOutput);
});
