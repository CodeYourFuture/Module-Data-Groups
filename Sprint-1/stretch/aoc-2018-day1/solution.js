const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8');

// split by spaces or new lines
// filter out empty values
// convert strings into numbers
const numbers = data.split(/\s+/).filter(Boolean).map(Number);

const sum = numbers.reduce((a, b) => a + b, 0);

console.log(sum); // 529