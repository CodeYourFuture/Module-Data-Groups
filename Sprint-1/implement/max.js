function findMax(elements) {
  const numberElements = elements.filter(
    (el) => typeof el === "number" && !Number.isNaN(el)
  );
  if (numberElements.length === 0) return -Infinity;
  return Math.max(...numberElements);
}

// console.log(findMax(findMax([0, null, 1])));

module.exports = findMax;
