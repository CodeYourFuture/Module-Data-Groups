const fs = require("fs");

const fileContent = fs.readFileSync("input.txt", "utf8");
console.log(fileContent);

const fileContentArray = fileContent.split("\n").map((line) => line.trim());
console.log(fileContentArray);

const sum = fileContentArray.reduce((total, item) => {
  return total +  parseFloat(item)
}, 0);

console.log(sum);
