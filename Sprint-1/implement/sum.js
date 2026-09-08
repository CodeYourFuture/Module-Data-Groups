// Explanation:
// Check the input is an array, then walk it with for...of, adding each number
// to a running total and throwing on anything that isn't a number.
// Starting the total at 0 means an empty array returns 0.
// Summing is the classic use of reduce, so a reduce-based answer is also fine
// if it still throws on non-numbers. But reduce is not taught at this point
// in the curriculum, and for...of is.

function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }

  let total = 0;
  for (const element of elements) {
    if (typeof element !== "number") {
      throw new Error("sum requires an array of numbers");
    }
    total += element;
  }

  return total;
}

module.exports = sum;
