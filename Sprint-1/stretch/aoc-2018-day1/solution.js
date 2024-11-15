function calculateFrequency(changes) {
  let frequency = 0;
  for (const change of changes) {
    frequency += change;
  }
  return frequency;
}
module.exports = calculateFrequency;
