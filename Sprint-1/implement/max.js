function findMax(elements) {
  const filterNumberArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] == "number") {
      filterNumberArray.push(elements[i]);
    }
  }
  const maxValue = Math.max(...filterNumberArray);
  return maxValue;
}
// console.log(findMax([1, 2, 3, 4, "hello"]));
// console.log(findMax([]));

module.exports = findMax;
