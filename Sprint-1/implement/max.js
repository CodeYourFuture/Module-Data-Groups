function findMax(elements) {
  const numericElements = elements.filter(
    (elements) => typeof elements === "number"
  ); // filter out only numeric values

  // If there are no numeric values, return infinity
  if (numericElements.length === 0) {
    return -Infinity;
  }

  // use Math.max with spread (...) to get the maximum number
  return Math.max(...numericElements);

}


module.exports = findMax;
