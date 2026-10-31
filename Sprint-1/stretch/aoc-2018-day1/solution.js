const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8");
const changes = input.trim().split("\n").map(Number);

let frequency = 0;
const seen = new Set([0]);

while (true) {
  for (const change of changes) {
    frequency += change;
    if (seen.has(frequency)) {
      console.log(frequency);
      process.exit(0);
    }
    seen.add(frequency);
  }
}

console.log(total);
