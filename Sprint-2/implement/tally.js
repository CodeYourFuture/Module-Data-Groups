function tally(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("Invalid input ");
  }
  if (elements.length === 0) {
    return {};
  }
  let count = 0;
  const frequency = Object.create(null);
  for (let i = 0; i < elements.length; i++) {
    const item = elements[i];
    if (frequency[item] === undefined) {
      frequency[item] = 1;
    } else {
      frequency[item]++;
    }
  }
  console.log(frequency);
  return frequency;
}

tally(["toString", "toString"]);
module.exports = tally;
