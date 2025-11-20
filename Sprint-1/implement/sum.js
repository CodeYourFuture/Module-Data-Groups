function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new TypeError("Input must be an array");
  }
  const filteredElements = elements.filter(
    (ele) => typeof ele === "number" && !isNaN(ele)
  );
  let sumElements = 0;

  for (const item of filteredElements) {
    sumElements += item;
  }
  return sumElements;
}

module.exports = sum;
