function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity;
  }

  let filteredNumericValues = elements.filter((item) => Number.isFinite(item));

  if (filteredNumericValues.length === 0) {
    return -Infinity;
  }

  let maximum = filteredNumericValues[0];
  for (const item of filteredNumericValues) {
    if (item > maximum) {
      maximum = item;
    }
  }

  // return Math.max(...filteredNumericValues);
  return maximum;
}

module.exports = findMax;
