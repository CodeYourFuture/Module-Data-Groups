const tally = require("./tally.js");

// Empty array
test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  // Array with duplicates
  test("counts items correctly in an array with duplicates", () => {
    expect(tally(['a', 'a', 'b', 'c'])).toEqual({
      a: 2,
      b: 1,
      c: 1,
    });
  });

// Invalid input (like a string)
  test("throws an error if input is not an array", () => {
    expect(() => tally("not an array")).toThrow("Input must be an array");
  });

  /*
  I implemented a function called tally that counts the frequency of each item in an array and 
  returns the result as an object.  The function uses a for...of loop and an object to track counts. 
  It supports:
- Regular arrays (e.g., ['a', 'b', 'a'] → { a: 2, b: 1 })
-  Empty arrays (returns {})
-  Type validation to ensure the input is an array — otherwise, it throws an error

I also wrote a set of tests using Jest to confirm the function handles:
- Counting multiple repeated items
- Empty input
- Invalid input types (e.g., passing a string)
This ensures the function behaves reliably and fails safely when given unexpected input.
*/


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

// Given an empty array
// When passed to tally
// Then it should return an empty object
test.todo("tally on an empty array returns an empty object");

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
