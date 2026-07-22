function sum(elements) {
  let total = 0;
  for (let i = 0; i < elements.length; i++) {
    // Only add numbers and ignore other data types
    if (typeof elements[i] === "number") {
      total = total + elements[i];
    }
  }
  return total;
}

module.exports = sum;
