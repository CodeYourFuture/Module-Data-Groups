function calibrateFrequency(changesInTime) {
  // we need to Start from a frequency of 0
  let frequency = 0;

  // Apply each change in order
  for (let change of changesInTime) {
    frequency += parseInt(change, 10);
  }

  return frequency;