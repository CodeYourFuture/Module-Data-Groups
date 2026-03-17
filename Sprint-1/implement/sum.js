// Sum the numerical values in an array.
// Non-number values should be ignored.

function sum(elements) {
  let total = 0;

  for (const element of elements) {
    // Only add values that are real numbers
    if (typeof element === "number" && !Number.isNaN(element)) {
      total += element;
    }
  }

  return total;
}

module.exports = sum;
