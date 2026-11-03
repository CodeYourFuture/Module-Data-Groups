function dedupe(numbers) {
  //function starts
  const uniqueNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    // for loop starts
    const currentValue = numbers[i];

    if (!uniqueNumbers.includes(currentValue)) {
      // if statement starts
      uniqueNumbers.push(currentValue);
    } // if statement ends
  } // for loop ends

  return uniqueNumbers;
} //function ends

module.exports = dedupe;
