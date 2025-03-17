function findMax(arr) {
    if (arr.length === 0) return -Infinity; 
    const numbers = arr.filter(item => typeof item === 'number');
    return numbers.length ? Math.max(...numbers) : undefined;

  // arr.filter(item => typeof item === 'number')  This expression is used to filter out non-number items from the array. It returns a NEW ARRAY containing only the items that are numbers.
  // to convert the new number only array, we use ... to spread the array into individual arguments for the Math.max function.
}

module.exports = findMax;
