const contains = require("./contains.js");

describe("contains", () => {
  // Case 1: Should return true if the property exists in object.
  test("should return true when object contains passed property name", () => {
    const objsWithValidProps = [
      [{ a: 1, b: 2 }, "b"],
      [{ name: "John", age: 30 }, "name"],
      [{ nested: { key: "value" } }, "nested"],
      [{ id: 123, status: "active", language: "JavaScript" }, "status"],
      [{ data: [], items: null }, "data"],
    ];

    objsWithValidProps.forEach(([obj, prop]) => {
      expect(contains(obj, prop)).toEqual(true);
    });
  });

  // Case 2: Should return false if the object does not contain the given property.
  test("should return false when object does not contain passed property name", () => {
    const objsWithoutProps = [
      [{ a: 1, b: 2 }, "c"],
      [{ name: "John", age: 30 }, "email"],
      [{ nested: { key: "value" } }, "nonexistent"],
      [{ id: 123, status: "active", language: "JavaScript" }, "description"],
      [{ data: [], items: null }, "nonexistent"],
    ];

    objsWithoutProps.forEach(([obj, prop]) => {
      expect(contains(obj, prop)).toEqual(false);
    });
  });

  // Case 3: Should return false if the object is empty.
  test("should return false when object is empty", () => {
    expect(contains({}, "anyProperty")).toEqual(false);
  });

  // Case 4: Should return false for properties that only exist in the prototype chain
  test("should return false for properties in prototype chain", () => {
    const objsWithProtoProps = [
      [{ a: 1 }, "toString"],
      [{ name: "John", age: 30 }, "hasOwnProperty"],
      [{ nested: { key: "value" } }, "isPrototypeOf"],
    ];

    objsWithProtoProps.forEach(([obj, prop]) => {
      expect(contains(obj, prop)).toEqual(false);
    });
  });

  // Case 5: Should throw an error if a non-object is passed
  test("should throw error when non-object is passed", () => {
    const nonObjects = [
      null,
      undefined,
      42,
      "The Curse",
      true,
      Infinity,
      ["string"],
    ];

    nonObjects.forEach((nonObj) => {
      expect(() => contains(nonObj, "prop")).toThrow(
        "First argument must be an object in the form { key: value }"
      );
    });
  });
});
