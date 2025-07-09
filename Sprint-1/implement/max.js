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
}

module.exports = findMax;
