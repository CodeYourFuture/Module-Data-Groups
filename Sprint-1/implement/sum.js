function sum(elements) {
  if (!Array.isArray(elements)) return "invalid elements";
  if (elements.length === 0) return 0;
  const number = [];
  for (const x of elements) {
    if (typeof x === "number" && !Number.isNaN(x)) {
      number.push(x);
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
