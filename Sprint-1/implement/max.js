function findMax(elements) {
  const numericElements = elements.filter((el) => typeof el === "number");
  return numericElements.length > 0
    ? Math.max(...numericElements)
    : "-Infinity";
}

module.exports = findMax;
