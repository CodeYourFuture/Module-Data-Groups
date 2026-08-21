function findMax(list) {
  if (!Array.isArray(list)) return -Infinity;

  // Filter out any elements that aren't valid numbers
  const numbers = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (numbers.length === 0) {
    return -Infinity;
  }

  return Math.max(...numbers);
}

module.exports = findMax;
