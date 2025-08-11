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

// Given an empty array
// When passed to tally
// Then it should return an empty object

const emptyArray = [];

test("tally on an empty array returns an empty object", () => {
    const currentOutput = tally(emptyArray);
    const targetOutput = {};
    expect(currentOutput).toEqual(targetOutput);
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

const animals = ['cat', 'dog', 'cat', 'bird', 'dog', 'dog', 'rabbit', 'cat'];

test("tally on an array returns an object with the frequency of each item as properties", () => {
    const currentOutput = tally(animals);
    const targetOutput = {cat: 3, dog: 3, bird: 1, rabbit: 1};
    expect(currentOutput).toEqual(targetOutput);
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

test("tally throws an error when given invalid input", () => {
    const name = "Hassan";
    const age = null;
    const subjectsHobbies = {Math: "puzzles", Science: "experiments", Art: "drawing"};
    expect(() => tally(name)).toThrow("Invalid input!");
    expect(() => tally(age)).toThrow("Invalid input!");
    expect(() => tally(subjectsHobbies)).toThrow("Invalid input!");
});