const contains = require("./contains.js");

test("contains on empty object returns false", function () {
  const object = {};
  const currentOutput = contains(object, "a");
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});

test("contains with an existing property name should return true", function () {
  const object = {
    a: 1,
    b: 2,
    flower: "red",
  };
  const currentOutput = contains(object, "a");
  const targetOutput = true;

  expect(currentOutput).toBe(targetOutput);
});

test("contains with a non-existing property name should return false", function () {
  const object = {
    a: 1,
    b: 2,
    flower: "red",
  };
  const currentOutput = contains(object, "c");
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});

test("contains with an array should return false", function () {
  const object = ["a", "b", "c"];

  const currentOutput = contains(object, "c");
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});
