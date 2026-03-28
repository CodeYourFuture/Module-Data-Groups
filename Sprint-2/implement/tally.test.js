const tally = require("./tally.js");

describe("tally()", () => {
  // Case 1: Returns an empty object when an empty array is passed to tally
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  // Case 2: Returns counts for each unique item when given an array without duplicate items
  test("tally on an array without duplicate items returns counts for each unique item", () => {
    const tallyWithUniqueItems = [
      [["a"], { a: 1 }],
      [["a", "b", "c"], { a: 1, b: 1, c: 1 }],
      [[1, 2, 3], { 1: 1, 2: 1, 3: 1 }],
      [[true, false], { true: 1, false: 1 }],
      [[null, undefined], { null: 1, undefined: 1 }],
    ];

    tallyWithUniqueItems.forEach(([inputArray, targetOutput]) => {
      expect(tally(inputArray)).toEqual(targetOutput);
    });
  });

  // Case 3: Return counts for each unique item when given an array with duplicate items
  test("tally on an array with duplicate items returns counts for each unique item", () => {
    const tallyWithDuplicateItems = [
      [["a", "a", "b", "c"], { a: 2, b: 1, c: 1 }],
      [[1, 2, 2, 3], { 1: 1, 2: 2, 3: 1 }],
      [[true, true, false], { true: 2, false: 1 }],
      [[null, null, undefined], { null: 2, undefined: 1 }],
    ];

    tallyWithDuplicateItems.forEach(([inputArray, targetOutput]) => {
      expect(tally(inputArray)).toEqual(targetOutput);
    });
  });
});
