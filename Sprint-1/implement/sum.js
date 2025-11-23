function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }

  const filteredElements = elements.filter(
    (element) => typeof element === "number" && !Number.isNaN(element)
  );
  if (filteredElements.length === 0) {
    return NaN;
  }
  let addElements = 0;
  for (let element of filteredElements) {
    addElements = addElements + element;
  }

  return addElements;
}
module.exports = sum;
