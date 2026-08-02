function findMax(elements) {
  const elementsNumberOnly = [...elements].filter((element) => !isNaN(element));
  const elementsPureNumber = [...elementsNumberOnly].filter(
    (item) => typeof item == "number"
  );

  if (elementsPureNumber.length === 0) {
    return -Infinity;
  } else if (elementsPureNumber.length === 1) {
    return elementsPureNumber[0];
  } else if (elementsPureNumber.length > 1) {
    const elementsSorted = elementsPureNumber.sort((a, b) => a - b);
    const elementsMax = elementsSorted.toSpliced(0, elementsSorted.length - 1);
    return elementsMax[0];
  }
}

module.exports = findMax;
