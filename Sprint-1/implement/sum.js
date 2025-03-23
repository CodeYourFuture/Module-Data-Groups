function sum(elements) {
  let total = 0;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && !isNaN(elements[i])) {
      total += elements[i];
    }
  }
  //   return total;
  return Number(total.toFixed(2)); // to avoid getting lot of decimal points for sum of floating number
}
module.exports = sum;
