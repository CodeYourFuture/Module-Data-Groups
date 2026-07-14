const fs = require("fs");

let frequencies;
try {
  const data = fs.readFileSync("./input.txt", "utf8");
  const inputData = data.split("\n").filter((line) => line.trim() !== "");
  frequencies = inputData.map(Number);
} catch (err) {
  console.error("Error reading file:", err);
}
