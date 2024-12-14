function findMax(elements) {
  const numericValues = elements.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );
  let maxNumber = numericValues[0];
  //console.log(numericValues);
  if (elements.length === 0 || numericValues.length == 0) {
    return -Infinity;
  }

  for (let i = 1; i < numericValues.length; i++) {
    if (maxNumber < numericValues[i]) {
      maxNumber = numericValues[i];
    }
  }
  return maxNumber;
}
//console.log(findMax(["hi", "bye", "no", 10, 1]));

module.exports = findMax;
