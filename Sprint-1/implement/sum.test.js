/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]) throws Error("sum requires an array of numbers") (sum can't add non-numerical elements, so it shouldn't guess)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
    const input = [];
    result = sum(input);
    expect(result).toEqual(0);
})

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given [12], returns 12", () => {
    const input = [12];
    result = sum(input);
    expect(result).toEqual(12);
})

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given [-1, -2, -3], returns -6", () => {
    const input = [-1, -2, -3];
    result = sum(input);
    expect(result).toEqual(-6);
})

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given [0.1, 0.2, 0.34], returns 0.6000000000000001", () => {
    const input = [0.1, 0.2, 0.3];
    result = sum(input);
    expect(result).toEqual(0.6000000000000001);
})

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("given ['grace', 'peter', 'steph', 'ruth', 'richie'], throw Error:'sum requires an array of numbers'", () => {
    const input = ['grace', 'peter', 'steph', 'ruth', 'richie'];
    expect(() => sum(input)).toThrow("sum requires an array of numbers");
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("given 'stink stank stunk', throw Error:'sum requires an array of numbers'", () => {
    const input = 'stink stank stunk';
    expect(() => sum(input)).toThrow("sum requires an array of numbers");
})
