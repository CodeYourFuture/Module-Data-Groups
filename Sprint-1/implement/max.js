function findMax(elements) {
    // check if array empty
    if (elements.length == 0) {
        return -Infinity;
    }
    let max;
    let isNumbersPresent = checkNumbersPresence(elements);
    for (let i = 0; i < elements.length; i++) {
        // if array does not have number values and value[i] conversable to a number
        if (!isNumbersPresent && !isNaN(elements[i])) {
            //if max is unassigned or value[i] > max
            if (!(typeof max == 'number') || Number(elements[i]) > max) {
                max = Number(elements[i]);
            }
            // if array have number values and value[i] is a number
        } else if (isNumbersPresent && typeof elements[i] == 'number') {
            //if max is unassigned or value[i] > max
            if (!(typeof max == 'number') || elements[i] > max) {
                max = elements[i];
            }
        }
    }

    return max;
}

function checkNumbersPresence(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            return true;
        }
    }
    return false;
}

module.exports = findMax;
