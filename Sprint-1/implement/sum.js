function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }
  const cleanElements = elements
    .filter((item) => typeof item === "number")
    .sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < cleanElements.length; i++) sum += cleanElements[i];

  return sum;
}
module.exports = sum;
