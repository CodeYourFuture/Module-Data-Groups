function findMax(elements) {
  if (!Array.isArray(elements)) return "invalid elements";
  const number = [];
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && !Number.isNaN(elements[i])) {
      number.push(elements[i]);
    }
  }
  if (number.length === 0) return -Infinity;
  let max = number[0];

  for (let i = 1; i < number.length; i++) {
    if (max < number[i]) {
      max = number[i];
    }
  }
  return max;
}

module.exports = findMax;
