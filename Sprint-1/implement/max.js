function findMax(numbersList) {
    let onlyNumbers = numbersList.filter((item) => typeof item === "number");
 let currentMax = Math.max(...onlyNumbers); ;
  return currentMax;
}

console.log(findMax([1, "apple", 5, 0, "banana", 3]));

module.exports = findMax;
