function calculateMedian(list) {
  const numbers = [];
  for (const x of list) {
    if (typeof x === "number") {
      numbers.push(x);
    }
  }
  if (numbers.length === 0 || list.length === 0) {
    return null;
  }

  numbers.sort((a, b) => a - b);
  const middleIndex = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    const left = numbers[middleIndex - 1];
    const right = numbers[middleIndex];
    return (left + right) / 2;
  }

  const median = numbers[middleIndex];
  return median;
}

module.exports = calculateMedian;
