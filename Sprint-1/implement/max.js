function max(numbers) {
  let max = -Infinity;

  for (let num of numbers) {
    if (typeof num === "number" && num > max) {
      max = num;
    }
  }
  return max;
}

module.exports = max;
