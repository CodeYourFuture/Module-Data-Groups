function sum(elements) {
  const filteredElements = elements.filter((element) =>
    Number.isFinite(element)
  );

  return parseFloat(
    filteredElements.reduce((total, num) => total + num, 0).toFixed(10)
  );
}

module.exports = sum;
