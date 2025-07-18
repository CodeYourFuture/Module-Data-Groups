function sum(elements) {

  let filterNumbers = elements.filter(
    (element) => typeof element === "number" && Number.isFinite(element)
  );
  if (filterNumbers.length === 0) {
    return 0;
  }
  const sumTotal = filterNumbers.reduce((acc, num) => acc + num);
  return sumTotal;
}

console.log(sum([1, 5, 8, 3]));
console.log(sum([-1, -40, -10, -3]));
console.log(sum([]));
console.log(sum([50]));
console.log(sum(["a", 4, "/", 6, "+"]));
console.log(sum(["r", ")", "}", "#"]));
console.log(sum([0.5, 0.7, 0.5, 0.9]));
module.exports = sum;
