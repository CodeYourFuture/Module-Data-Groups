describe("contains", () => {
  // Given an empty object
  // When passed to contains
  // Then it should return false
  it("contains on empty object returns false", () => {
    const object = {};
    const property = "a";
    expect(contains(object, property)).toEqual(false);
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  it("object contains property returns true", () => {
    const object = { a: 1, b: 2 };
    const property = "a";
    expect(contains(object, property)).toEqual(true);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  it("object does not contain property returns false", () => {
    const object = { a: 1, b: 2 };
    const property = "c";
    expect(contains(object, property)).toEqual(false);
  });

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  it("given invalid parameter (an array) returns false or throws an error", () => {
    expect(contains([], [])).toEqual(false);
    expect(contains(["a", 1], 1)).toEqual(false);
    expect(contains({ a: 1, b: 2 }, ["a"])).toEqual(false);
  });

  it("given null returns false", () => {
    expect(contains(null, "a")).toEqual(false);
    expect(contains({ a: 1, b: 2 }, null)).toEqual(false);
    expect(contains(null, null)).toEqual(false);
  });
});