


function calculateFrequency(input) {
  let frequency = 0;

 // Convert the input string into an array of changes
  const changes = input.trim().split('\n');

  for (let change of changes) {
    frequency += Number(change); // Convert each string to number and add
  }


  return frequency;
}
module.exports = calculateFrequency;