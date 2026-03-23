function sum(elements) {
  return elements.reduce(
    (acc, curr) =>
      typeof curr === "number" && !Number.isNaN(curr) ? acc + curr : acc,
    0
  );
}

module.exports = sum;

