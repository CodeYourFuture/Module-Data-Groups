const fs = require('fs');
const filePath = 'input.txt'; 

function calculateFrequencyFromFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  
  const changes = data.split('\n').map(Number);

  let result = 0;
  for (let change of changes)
    result+=change;

  return result;
}

const frequency = calculateFrequencyFromFile(filePath);

console.log('Frequency:', frequency);
