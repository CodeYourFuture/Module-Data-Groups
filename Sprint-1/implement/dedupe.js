function dedupe(numbers) {
  const uniqueNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentValue = numbers[i];

    if (!uniqueNumbers.includes(currentValue)) {
      uniqueNumbers.push(currentValue);
    }
  }

  return uniqueNumbers;
} //function ends

module.exports = dedupe;
