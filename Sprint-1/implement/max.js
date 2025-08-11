function findMax(elements) {
                
    // this filters  only the numeric values of the given array.

    if ( numbers.length === 0){
        return -Infinity;
    }
    // this checks if we have valid numbers to compare.
    else {
        return Math.max(...numbers);
    }

}

module.exports = findMax;
