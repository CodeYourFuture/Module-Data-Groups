const fs = require("fs");
const inputText = fs.readFileSync("input.txt", "utf8");

function calculateResultingFrequency(frequencyChangeLines) {
  const frequencyChangeAsNumbers = frequencyChangeLines
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map(Number);
  let resultingFrequency = 0;

  for (const frequencyChange of frequencyChangeAsNumbers) {
    resultingFrequency += frequencyChange;
  }
  return resultingFrequency;
}
console.log(lines.at(-1));        // +75784
console.log(Number(lines.at(-1))); // 75784
console.log(calculateResultingFrequency(inputText));
