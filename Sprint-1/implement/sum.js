function sum(elements) {
  let sumNumber = 0;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && !isNaN(elements[i])) {
      sumNumber += elements[i];
    }
  }
  return sumNumber;
}
arr = ["hello", null, undefined, "42", {}, [], true, false, NaN];
console.log(sum(arr));
module.exports = sum;
