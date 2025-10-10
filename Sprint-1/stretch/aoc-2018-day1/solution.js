const fs = require("fs");

// read the file
let frequencies = fs.readFileSync("input.txt", "utf-8");

// split the numbers by next line and covert them into Number
frequencies = frequencies.split("\n").map((num) => Number(num));

// reduce to get the total = 529
console.log(frequencies.reduce((acc, num) => acc + num, 0));
