const filePath = './input.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    calculateFrequency(data);
});
function calculateFrequency(changes) {
  let frequency = 0;
  for (const change of changes) {
    frequency += change;
  }
  return frequency;
}
module.exports = calculateFrequency;
