const fs = require("fs");

function calculateFrequecy() {
  const text = fs.readFileSync("input.txt", "utf-8");
  const changesInFrequency = text.trim().split(/\r?\n/).map(Number);
  return changesInFrequency.reduce((acc, curr) => acc + curr, 0);
}
console.log(calculateFrequecy());
