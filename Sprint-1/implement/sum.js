function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }
  const number = elements.filter(
    (value) => typeof value === "number" && !Number.isNaN(value)
  );
  if (number.length === 0) {
    return undefined;
  }
  if (elements.length === 1) {
    return elements[0];
  }
  let arraySum = 0;
  for (let i = 0; i < number.length; i++) {
    arraySum += number[i];
  }
  return arraySum;
}

module.exports = sum;
