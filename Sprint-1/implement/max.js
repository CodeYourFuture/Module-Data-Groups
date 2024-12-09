function findMax(elements) {
  const numericElements = elements.filter(
    (el) => typeof el === "number" && Number.isFinite(el)
  );
  return numericElements.length ? Math.max(...numericElements) : -Infinity;
}

module.exports = findMax;
