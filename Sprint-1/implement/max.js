function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new TypeError("Input must be an array");
  } else {
    const filteredArray = elements.filter(
      (ele) => typeof ele === "number" && !isNaN(ele)
    )
    return Math.max(...filteredArray);
  }
}

module.exports = findMax;