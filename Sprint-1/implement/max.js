function findMax(list) {
  const numbers = list.filter((item) => typeof item === "number" && !Number.isNaN(item));

  return numbers.reduce((max, current) => (current > max ? current : max), -Infinity);
}

module.exports = findMax;