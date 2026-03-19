// Sum the numerical values in an array.
// Non-number values should be ignored.

function sum(elements) {
  let total = 0;

  for (const element of elements) {
    if (Number.isFinite(element)) {
      total += element;
    }
  }

  return total;
}

module.exports = sum;
