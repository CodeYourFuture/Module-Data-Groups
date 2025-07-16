function findMax(elements) {
  if (elements.length === 0) {
    return "-Infinity";
  }

  if (elements.every((item) => typeof item === "string")) {
    return "undefined";
  }

  const numbersArray = elements.filter((item) => typeof item === "number");
  elements.sort((a, b) => a - b);
  const maxNum = elements[elements.length - 1];

  return maxNum;
}
const verArray = [-5, -10, -65, -6];

console.log(findMax(verArray));

module.exports = findMax;
