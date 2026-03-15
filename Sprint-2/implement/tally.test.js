const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
test("tally on an empty array returns an empty object", () => {
  expect(tally(["apples", "bananas", "apples", "orange", "bananas"])).toEqual({
    apples: 2,
    bananas: 2,
    orange: 1,
  });
  expect(tally(["ants", "bear", "ants", "antalope"])).toEqual({
    ants: 2,
    bear: 1,
    antalope: 1,
  });
  expect(tally([4, 4, 3, 2, 2, 2, 2, "cat"])).toEqual({
    4: 2,
    3: 1,
    2: 4,
    cat: 1,
  });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally it should return counts for each unique item", () => {
  expect(tally(["armadillos", "boa_constrictor", "armadillos"])).toEqual({
    armadillos: 2,
    boa_constrictor: 1,
  });
  expect(tally(["ants", "bear", "ants", "antalope"])).toEqual({
    ants: 2,
    bear: 1,
    antalope: 1,
  });
  expect(tally([4, 4, 3, 2, 2, 2, 2, "cat"])).toEqual({
    4: 2,
    3: 1,
    2: 4,
    cat: 1,
  });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
