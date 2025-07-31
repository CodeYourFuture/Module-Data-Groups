const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

describe("checks an object contains a particular property", () => {
  test("It will return false when object is empty", () => {
    const obj = {};
    const currentOutput = contains(obj);
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will return true when object is contains property", () => {
    const obj = { a: 1, b: 2, c: "hi" };
    const currentOutput = contains(obj, "c");
    const targetOutput = true;
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will return false when object does not contain property", () => {
    const obj = { trainee: "Elhadj", city: "London" };
    const currentOutput = contains(obj, "age");
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
  });

  test("Return false when param is not an object", () => {
    const obj = true;
    const currentOutput = contains(obj);
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
  });
});
