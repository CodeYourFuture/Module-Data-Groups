function findMax(elements) {
    let max = -Infinity; // smallest possible value in JS
    for (const element of elements) {
        // Check if the element is a finite number and greater than current max
        if (Number.isFinite(element) && element > max) {
            max = element; // will always be the greatest so far
        }
    }
    return max;
}

//console.log(findMax([1.5, 2.3, 0.7, 3.9, 2.8])); // should return 3.9
module.exports = findMax;
