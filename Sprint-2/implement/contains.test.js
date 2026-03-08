const contains = require("./contains.js");

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
    try {
      expect(contains(obj, prop)).toEqual(true);
    } catch (error) {
      throw new Error(
        `Failed to return true when ${prop} is present in obj: ${error.message}`
      );
    }
  });
});

// Case 2: Should return false if the object does not contain the given property.
test.todo(
  "should return false when object does not contain passed property name"
);

// Case 3: Should return false if the object is empty.
test.todo("should return false when object is empty");

// Case 4: Should throw an error if a non-object is passed
test.todo("should throw error when non-object is passed");
