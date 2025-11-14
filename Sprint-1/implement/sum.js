
function sum(arr) {
  // If not an array, return 0 safely
  if (!Array.isArray(arr)) return 0;

  let total = 0;

  for (let item of arr) {
    if (typeof item === "number" && !isNaN(item)) {
      total += item;
    }
  }

  return total;
}

module.exports = sum;

module.exports = sum;
