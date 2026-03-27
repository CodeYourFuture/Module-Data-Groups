function findMax(elements) {
  if (!Array.isArray(elements)) {
    return -Infinity;
  }

  const numbers = elements.filter((el) => Number.isFinite(el));

  if (numbers.length === 0) {
    return -Infinity;
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

module.exports = findMax;
