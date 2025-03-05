const sum = (elements) => {
  return elements.reduce(
    (acc, num) => (typeof num === "number" ? acc + num : acc),
    0
  );
};
console.log(sum([10, 10, 10]));
console.log(sum([-2, -5, -9, -12]));
console.log(sum([5.32, 6.59, 8.52, 7.2]));
console.log(sum([65, 67, "month", 7]));

module.exports = sum;
