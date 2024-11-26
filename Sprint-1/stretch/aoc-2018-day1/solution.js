function calculateFrequency(changes) {
  return changes.reduce((acc, change) => acc + change, 0);
}

module.exports = calculateFrequency;
