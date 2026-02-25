function findMax(elements) {
  const numbersOnly = elements.filter((element) => Number.isFinite(element));

  return numbersOnly.reduce((a, b) => Math.max(a, b), -Infinity);
}

module.exports = findMax;
