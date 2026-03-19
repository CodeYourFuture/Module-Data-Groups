// Sum the numerical values in an array.
// Non-number values should be ignored.

function sum(elements) {
  let total = 0;

  for (const element of elements) {
<<<<<<< HEAD
    // Only add values that are real numbers
    if (typeof element === "number" && !Number.isNaN(element)) {
=======
    if (Number.isFinite(element)) {
>>>>>>> a22ed15 (Address mentor feedback for sprint 1 data groups)
      total += element;
    }
  }

  return total;
}

module.exports = sum;
