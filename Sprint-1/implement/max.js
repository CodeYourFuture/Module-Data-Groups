function findMax(elements) {
  const numbers = elements.filter(element.isFinite);
  if (numbers.length === 0) {
    return -Infinity;
  }
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1];
}

module.exports = findMax;
