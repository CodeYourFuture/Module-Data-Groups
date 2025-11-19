// We need to import file system and path for our task 

const fs = require("fs");
const path = require("path");

function solution() {

  // set file path

  const inputFilePath = path.join(__dirname, "input.txt");

  // read the file content
  let fileContent = fs.readFileSync(inputFilePath, "utf-8");

  // split the content into lines and convert each line to a number
  let numbersArray = fileContent.split("\n").map(num => Number(num));

  // calculate the sum of all numbers
  const sumOfNumbers = numbersArray.reduce((sum, num) => sum + num, 0);

  return sumOfNumbers;
}

console.log(solution());

module.exports = solution;

// A solution to add-up frequency values in input.txt