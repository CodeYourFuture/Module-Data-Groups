const author = require("./author.js");

function getValues(obj) {
  return Object.values(obj);
}
test("given an object, returns the property values in the object", function () {
  const author = {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 40,
    alive: true,
  };
  const currentOutput = getValues(author);
  const targetOutput = ["Zadie", "Smith", "writer", 40, true];

  expect(currentOutput).toStrictEqual(targetOutput);
});
