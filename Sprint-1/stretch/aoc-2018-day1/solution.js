const fs = require("fs");
const changes = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split("\n")
  .map(Number);

let frequency = 0;

const seen = new Set([0]);

for (i = 0; ; i++) {
  frequency += changes[i % changes.length];

  if (seen.has(frequency)) {
    console.log(frequency);
    break;
  }
  seen.add(frequency);
}

const fs = require("fs");
const changes = fs
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .filter(Boolean)
  .map(Number);

let frequency = 0;
const seen = new Set([0]);

for (let i = 0; ; i++) {
  frequency += changes[i % changes.length];

  if (seen.has(frequency)) {
    console.log(frequency);
    break;
  }

  seen.add(frequency);
}
