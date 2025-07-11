function sum(elements) {
  let onlyNumbers = [];
  //Extract numbers from the Array incase array is mixed
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
      onlyNumbers.push(elements[i]);
    }
  }
  //Sum numbers in array
  let sumOfArray = onlyNumbers.reduce((a, b) => a + b);
  return sumOfArray;
}

// console.log(sum([10, 20, 30]));
// console.log(sum(["hey", 10, "hi", 60, 10]));

module.exports = sum;
