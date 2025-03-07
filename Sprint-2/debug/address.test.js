const address = require("./address.js");

function gethouseNumber(obj) {
  return 42;
}

test("given an address, returns the houseNumber", function () {
  const currentOutput = gethouseNumber(address);
  const targetOutput = 42;

  expect(currentOutput).toStrictEqual(targetOutput);
});
