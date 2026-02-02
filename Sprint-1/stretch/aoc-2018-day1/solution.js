const fs = require("fs");

function calculateFrequecy() {
  const text = fs.readFileSync("input.txt", "utf-8");
  const ChangesInFrequency = text.trim().split(/\r?\n/).map(Number);
  return ChangesInFrequency.reduce((acc, curr) => acc + curr, 0);
}
