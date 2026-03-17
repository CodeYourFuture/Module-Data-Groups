const fs = require("fs"); //getting file system to read file

function getFinalFrequency() {
  let finalFrequency = 0;

  const data = fs.readFileSync("input.txt", "utf8");
  const numbers = data
    .split("\n")
    .map(Number) // to convert split substrings into numbers
    .filter((n) => !isNaN(n)); //filter out any non number values
  for (const number of numbers) {
    finalFrequency += number;
  }
  return finalFrequency;
}

console.log("final frequency is " + getFinalFrequency());
