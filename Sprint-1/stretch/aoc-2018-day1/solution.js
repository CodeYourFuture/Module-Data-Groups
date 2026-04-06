// tons of new things learned from this puzzle fileSystem module, reading files, parsing data, filtering data, reducing data
// and the most important is data parsing and cleaning

// first we need the built in fileSystem module to read the input file
const fs = require("fs");

function solutionPuzzle() {
  // read the input
  const input = fs.readFileSync("input.txt", "utf-8");

  // split the input
  const numbers = input.split("\n").map(Number);

  // calculate the sum of the numbers
  const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);

  return totalSum;
}

console.log(solutionPuzzle());
