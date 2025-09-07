function sum(elements) {
  if (!Array.isArray(elements) || elements.length === 0) return 0;

  return elements.reduce((total, el) => {
    return typeof el === "number" ? total + el : total;
  }, 0);
}

module.exports = sum;

