

function sum(elements) {
  let total = 0;
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && Number.isFinite(elements[i])) {
      total += elements[i];
    }
  }
  return total;
}

module.exports = sum;