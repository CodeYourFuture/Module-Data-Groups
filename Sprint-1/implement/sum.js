function sum(elements) {
  const elementsNumberOnly = [...elements].filter((element) => !isNaN(element));
  const elementsPureNumber = [...elementsNumberOnly].filter(
    (item) => typeof item == "number"
  );

  if (elementsPureNumber.length === 0) {
    return 0;
  } else if (elementsPureNumber.length === 1) {
    return elementsPureNumber[0];
  } else if (elementsPureNumber.length > 1) {
    const iterator = elementsPureNumber.values();
    let sumOfArray = 0;
    for (const value of iterator) {
      sumOfArray += value;
    }
    return sumOfArray;
  }
}

module.exports = sum;
