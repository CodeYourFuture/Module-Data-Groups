function sum(arr) {
  const numbersArray = arr.filter((num) => typeof num === "number");

  let arraySum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    arraySum += numbersArray[i];
  }
  return arraySum;
}

module.exports = sum;
