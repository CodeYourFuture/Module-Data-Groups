const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
const total = data
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line !== "")
  .map(Number);

const mapFrequency = (changes) => changes.reduce((acc, num) => acc + num, 0);
console.log(mapFrequency([+1, +1, +1])); // 3
console.log(mapFrequency([+1, +1, -2])); // 0
console.log(mapFrequency([-1, -2, -3])); // -6
console.log(mapFrequency(total)); // 529;
