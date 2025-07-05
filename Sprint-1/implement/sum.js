function sum(elements) {
  let initialValue = false;
  let initialAccumulator = 0;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (typeof element === "number" && Number.isFinite(element)) {
      initialAccumulator = element;
      initialValue = true;
      break;
    }
  }
  if (!initialValue) {
    return 0;
  }

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
