function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }

  if (elements.every((item) => typeof item === "string")) {
    return "undefined";
  }

  const numbersArray = elements.filter((item) => typeof item === "number");

  let sum1 = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum1 += numbersArray[i];
  }
  return sum1;
}
testVar = [10, "jesus", 20, "hi"];
console.log(sum(testVar));

module.exports = sum;
