function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity;
  }
  let filteredNumericValues = elements.filter((item) => Number.isFinite(item));
  console.log(filteredNumericValues);

  return Math.max(...filteredNumericValues);
}

module.exports = findMax;
