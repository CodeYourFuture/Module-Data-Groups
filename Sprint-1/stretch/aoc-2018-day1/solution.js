//import fs readfile
const fs = require("fs");
//readfile for input
const input = fs.readFileSync("input.txt", "utf-8");
//input into the lines, to change array falsy split n line ,check falsy and make it number
const changeInput = input.split("\n").filter(Boolean).map(Number);
//use reduce to combine all starting from 0
const resultingValue = changeInput.reduce((a, b) => a + b, 0);
console.log(resultingValue);
