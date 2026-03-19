function sum(elements) {
    if (!Array.isArray(elements) || elements.length === 0) return 0;
    return elements
      .filter((item) => typeof item === "number" && !Number.isNaN(item))
      .reduce((acc, n) => acc + n, 0);
}

module.exports = sum;
