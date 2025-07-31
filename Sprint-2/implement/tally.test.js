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

test("An array of items, should return an object containing the count for each unique item", () => {
    expect(tally(["apple", "orange", "banana","watermelon"])
    ).toEqual({
        apple: 1,
        orange: 1,
        banana: 1,
        watermelon: 1
    });
});

// --------------------------------------------------------------------------------------
// Given an empty array
// When passed to tally
// Then it should return an empty object

test("tally on an empty array returns an empty object", () =>{
    expect(tally([])).toEqual({});
});

// --------------------------------------------------------------------------------------
// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

test("An array of items, should return an object containing the count for each unique item", () => {
    expect(tally(["apple", "orange", "banana", "banana", "apple", "apple", "banana", "watermelon", "orange", "apple"])
    ).toEqual({
        apple: 4,
        orange: 2,
        banana: 3,
        watermelon: 1
    });
});

// --------------------------------------------------------------------------------------
// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

test("An invalid input, should throw an error", () => {
    expect(() => tally("banana,apple,orange")).toThrow("Input must be an array!");

    expect(() => tally(1, 2, 3, 4, 4, 2, 1, 2)).toThrow("Input must be an array!");

    expect(() => tally({apple:3, banana:2, orange: 4})).toThrow("Input must be an array!");
});
