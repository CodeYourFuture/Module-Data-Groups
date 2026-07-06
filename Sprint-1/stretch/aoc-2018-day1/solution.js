const fs = require("fs");

const raw = fs.readFileSync("input.txt", "utf8");

const lines = raw.split("\n");
const numbers = lines.map(Number);
function findFinalFrequency(nums) {
  let total = 0;

  for (const n of nums) {
    total += n;
  }

  return total;
}
console.log(findFinalFrequency(numbers));
