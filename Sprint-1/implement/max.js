function findMax(elements) {
  const numbers = elements.filter((item) => typeof item === "number");
  if (numbers.length === 0) {
    return -Infinity;
  }
  let max = -Infinity;

  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

module.exports = findMax;
