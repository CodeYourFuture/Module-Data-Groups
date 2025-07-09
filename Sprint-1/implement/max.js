function findMax(elements) {
    // makes an array to hold only numbers
    const numbersOnly = []

    // to loop through each element in the array
    for (const item of elements){
        
        // if the item is a number push it to the numbersOnly array
        if (typeof item === `number`){
            numbersOnly.push(item);
        }
    }
    // start with the first number in the "numbersOnly" array
    let max = numbersOnly[0];

    // loop for the largest number in the "numbersOnly" array
    for (const num of numbersOnly) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(findMax([30, 50, 10, 40])); // 50
console.log(findMax(['hey', 10, 'hi', 60, 10])); // 60
module.exports = findMax;
