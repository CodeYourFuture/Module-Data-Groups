function sum(elements) {
  let total = 0;
  elements = elements.filter((x) => typeof x === "number");
  for (let i = 0; i < elements.length; i++) {
    total += elements[i];
  }
  return total;
}

module.exports = sum;
