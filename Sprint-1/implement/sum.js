function sum(array) {
  numbersArray = array.filter((value) => typeof value === "number");
  let sum = 0;
  numbersArray.forEach((element) => {
    sum += element;
  });
  return sum;
}

module.exports = sum;
