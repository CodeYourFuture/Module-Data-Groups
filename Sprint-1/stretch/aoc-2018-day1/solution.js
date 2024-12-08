const frequencyFluctuation = (changes) => {
  let frequency = 0;

  for (change of changes) {
    frequency += change;
  }
  console.log(frequency);
  
  return frequency;
}

// frequencyFluctuation([-10,-12,+1,+14,+11,-19]);

module.exports = frequencyFluctuation;