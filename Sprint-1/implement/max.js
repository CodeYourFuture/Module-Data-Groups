function findMax(elements) {
  let largestNum;
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
      if (largestNum === undefined || elements[i] > largestNum) {
        largestNum = elements[i];
      }
    }
  }
  return largestNum;
}
module.exports = findMax;
