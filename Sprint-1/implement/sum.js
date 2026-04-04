function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }
  const number = elements.filter((value) => typeof value === "number");
  if (number.length === 0) {
    return undefined;
  }
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }

  return sum;
}

module.exports = sum;
