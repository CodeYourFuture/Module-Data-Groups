function max(numbers) {
  let max = -Infinity;

  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

module.exports = max;
