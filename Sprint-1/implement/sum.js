function sum(elements) {
  sum = 0;
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && !isNaN(elements[i])) {
      sum = elements[i] + sum;
    }
  }
   return Math.round(sum * 1e10) / 1e10;
}
// console.log(sum(["u"]));
module.exports = sum;
