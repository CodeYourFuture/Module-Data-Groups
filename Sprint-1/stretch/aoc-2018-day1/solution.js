const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf-8");

function findFinalFrequency(inputString) {
  const numberArray = inputString.split("\n").map(Number);
  return numberArray.reduce((sum, num) => sum + num, 0);
}

console.log(findFinalFrequency(data));
