function findMax(arr) {
  const numbers = arr.filter((x) => typeof x === "number" && !Number.isNaN(x));

  if (numbers.length === 0) return -Infinity;

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

module.exports = findMax;