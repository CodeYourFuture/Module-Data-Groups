const fs = require('fs');

const filePath = 'input.txt';
const content = fs.readFileSync(filePath, 'utf8');
const frequencyChanges = content
  .split('\n')
  .filter(line => line.trim() !== '')
  .map(str => parseInt(str, 10));


const total = frequencyChanges.reduce((a, b) => a + b, 0);

console.log('Total frequency:', total);
