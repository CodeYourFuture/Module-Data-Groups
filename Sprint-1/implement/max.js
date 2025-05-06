function findMax(elements) {
  if (elements.length === 0) {
    return Infinity;
  }
  let numericElements = elements.filter(function (item) {
    return typeof item === "number";
  });
  console.log("numeric value", numericElements);
  let max = numericElements[0];
  for (let i = 1; i < numericElements.length; i++) {
    if (numericElements[i] > max) {
      max = numericElements[i];
    }
  }
  return max;
}

console.log(findMax(["h"]));

module.exports = findMax;
