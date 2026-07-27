function sum(elements) {
  let filteredNumericValues = elements.filter((item) => Number.isFinite(item));
  let sumOfElements = 0;
  for (let item of filteredNumericValues) {
    sumOfElements += item;
  }
  return sumOfElements;
}

module.exports = sum;
