function sum(elements) {
  if (elements.length === 0) return 0;
  let numberElement = elements.filter((el) => typeof el === "number");
  if (numberElement.length === 0) return 0; // least surprising value;
  let total = 0;
  for (let num of numberElement) {
    total += num;
  }
  return Number.isInteger.total ? total : Number(total.toFixed(2));
}

module.exports = sum;
