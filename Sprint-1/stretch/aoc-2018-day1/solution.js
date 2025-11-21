const fs = require("fs");
const path = require("path");

function solution() {
  // set the file path
  const filePath = path.join(__dirname, "input.txt");

  // read the file
  let frequencies = fs.readFileSync(filePath, "utf-8");

  // split the numbers by next line and covert them into Number
  frequencies = frequencies.split("\n").map((num) => Number(num));

  // reduce to get the total = 529
  const total = frequencies.reduce((acc, num) => acc + num, 0);

  return total;
}

console.log(solution());

module.exports = solution;
