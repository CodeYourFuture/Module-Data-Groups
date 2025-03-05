const findMax = (elements) => {
  return elements.reduce(
    (maxNumber, num) =>
      typeof num === "number" && !isNaN(num) && num > maxNumber
        ? num
        : maxNumber,
    -Infinity
  );
};
console.log(findMax([30, 50, 10, "string", 40]));
console.log(findMax(["number", 8, "string", 9]));
console.log(findMax([]));
module.exports = findMax;
