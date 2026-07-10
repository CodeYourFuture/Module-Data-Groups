const dedupe = require("./dedupe.js");

describe("dedupe", () => {
  test("given an empty array, it should return an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });
  test.each([
    {
      input: [1, 2, 3, 4],
      expected: [1, 2, 3, 4],
    },
    {
      input: ["a", "b", "c"],
      expected: ["a", "b", "c"],
    },
  ])("returns a copy of an array with no duplicates", ({ input, expected }) => {
    const result = dedupe(input);

    expect(result).toEqual(expected);
    expect(result).not.toBe(input);
  });
  test.each([
    {
      input: ["a", "c", "b", "d", "c", "d"],
      expected: ["a", "c", "b", "d"],
    },
    {
      input: [1, 2, 3, 2, 4, 3],
      expected: [1, 2, 3, 4],
    },
  ])(
    "given an array with duplicates, it should remove duplicates and preserve first occurrence",
    ({ input, expected }) => {
      const result = dedupe(input);

      expect(result).toEqual(expected);
      expect(result).not.toBe(input);
    }
  );
});
