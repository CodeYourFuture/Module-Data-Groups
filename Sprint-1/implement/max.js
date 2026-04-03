function findMax(elements) {
  if (!Array.isArray(elements)) return "invalid elements";
  const numberList = [];
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && !Number.isNaN(elements[i])) {
      numberList.push(elements[i]);
    }
  }
  if (numberList.length === 0) return -Infinity;
  let max = numberList[0];

  for (let i = 1; i < numberList.length; i++) {
    if (max < numberList[i]) {
      max = numberList[i];
    }
  }
  return max;
}

module.exports = findMax;
