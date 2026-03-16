const dedupe = require("./dedupe");

describe("dedupe", () => {
  // Given an empty array
  // When passed to the dedupe function
  // Then it should return an empty array
  test.todo("given an empty array, it returns an empty array");
  test("given an empty array, it returns an empty array", () => {
    const result = dedupe([]);
    expect(result).toEqual([]);
  });

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array
  test("given an array with no duplicates, it returns a copy of the original array", () => {
    const input = [1, 2, 3, 4];
    const result = dedupe(input);

    expect(result).toEqual([1, 2, 3, 4]);
    expect(result).not.toBe(input); // should be a new copy
  });

  // Given an array with strings
  // When passed to the dedupe function
  // Then it should remove duplicates preserving first occurrence
  test("removes duplicate strings preserving first occurrence", () => {
    const input = ["a", "a", "a", "b", "b", "c"];
    const result = dedupe(input);

    expect(result).toEqual(["a", "b", "c"]);
  });

  // Given an array with numbers
  // When passed to the dedupe function
  // Then it should remove the duplicate values, preserving the first occurence of each element
  test("removes duplicate numbers preserving first occurrence", () => {
    const input = [5, 1, 1, 2, 3, 2, 5, 8];
    const result = dedupe(input);

    expect(result).toEqual([5, 1, 2, 3, 8]);
  });

  test("removes duplicates in mixed order", () => {
    const input = [1, 2, 1];
    const result = dedupe(input);

    expect(result).toEqual([1, 2]);
  });
});
