const fs = require("fs");

let frequencies;

// read the input file and convert the input elements into numbers
try {
  const data = fs.readFileSync("./input.txt", "utf8");
  const inputData = data.split("\n").filter((line) => line.trim() !== "");
  frequencies = inputData.map(Number);
} catch (err) {
  console.error("Error reading file:", err);
}

function getFrequenciesSum(frequencies) {
  return frequencies.reduce((acc, curr) => acc + curr, 0);
}
console.log(getFrequenciesSum(frequencies)); // result is 529
