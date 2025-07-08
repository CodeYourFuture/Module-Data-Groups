const fs = require('fs');

// Read the file synchronously
const data = fs.readFileSync('input.txt', 'utf8').split('\n');
let currentFrequency = 0;
for (let index = 0; index < data.length; index++ ) {
    currentFrequency = currentFrequency + Number(data[index]);
  
}
console.log(currentFrequency);