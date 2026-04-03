function sum(elements) {
  if (!Array.isArray(elements)) return "invalid elements";
  if (elements.length === 0) return 0;
  const number = [];
  for (const part of elements) {
    if (typeof part === "number" && !Number.isNaN(x)) {
      number.push(part);
    }
  }
  if (number.length === 0) return "invalid elements";
  let sumOfNum = 0;
  for (let i = 0; i < number.length; i++) {
    sumOfNum += number[i];
  }
  return sumOfNum;
}

module.exports = sum;
