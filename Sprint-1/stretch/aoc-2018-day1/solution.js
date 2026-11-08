const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

function calculateFrequency(input) {
  let frequency = 0;
  const nums = input.trim().split("\n").map(Number);

  for (num of nums) {
    frequency += num;
  }
  return frequency;
}
console.log(calculateFrequency(input));

//529
