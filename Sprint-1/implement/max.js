function findMax(elements) {
  const numericElements = elements.filter((el) => typeof el === "number");
  console.log(numericElements)
  return numericElements.length > 0 ? Math.max(...numericElements) : "-Infinity";
}

module.exports = findMax;

// console.log(findMax([1, 2, 3, -2, -3, -4]))

console.log(Math.max(5,2,3))