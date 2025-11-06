const swapFirstAndLast = require("./swapFirstAndLast.js");

test("swaps first and last elements of [5, 2, 3, 4, 1]", () => {
  const myArray = [5, 2, 3, 4, 1];
  swapFirstAndLast(myArray);
  expect(myArray).toEqual([1, 2, 3, 4, 5]);
});
