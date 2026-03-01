function sum(elements) {
  let total = 0;
  const numbers = elements.filter((element) => typeof element === "number");

  numbers.forEach((numb) => {
    total = total + numb;
  });
  return total;
}
console.log(sum([5]));
module.exports = sum;
