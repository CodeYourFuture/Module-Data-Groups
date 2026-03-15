function sum(elements) {
  const numbers = elements.filter((value) => typeof value === "number");

  if (numbers.length === 0 && elements.length > 0) return NaN;

  return numbers.reduce((total, nextNumber) => total + nextNumber, 0);
}
console.log(sum([])); // 0
console.log(sum([1])); // 1
console.log(sum([5, 2, -3])); //4
console.log(sum([1.5, 2.5, 3.5])); //7.5
console.log(sum(["h", 2.5, "e", 3.5])); //6
console.log(sum(["a", "b", "c", "d"])); //Nan

module.exports = sum;
