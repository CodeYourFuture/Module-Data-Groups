// sum.js
// Sum all numerical elements in an array
// Non-numeric values are ignored

function sum(elements) {
  // Filter to keep only numbers (ignores strings, null, undefined, etc.)
  const numbersOnly = elements.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  // If no numbers found, return 0 (consistent with empty array behaviour)
  if (numbersOnly.length === 0) return 0;

  // reduce() accumulates all numbers into a single total
  // 0 is the initial value of the accumulator
  return numbersOnly.reduce((total, num) => total + num, 0);
}

module.exports = sum;
