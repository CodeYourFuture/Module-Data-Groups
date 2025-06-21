function findMax(elements) {
    // check if array empty
    if (elements.length == 0) {
        return -Infinity;
    }
    let max;
    // if array does not have number values
    if (!checkNumbersPresence(elements)) {
        for (let i = 0; i < elements.length; i++) {
            //if max is unassigned and value conversable to number 
            if (!(typeof max == 'number') && !isNaN(elements[i])) {
                max = Number(elements[i]);
            }
            // if max is assigned and value converted to number
            if (typeof max == 'number' && !isNaN(elements[i])) {
                if (Number(elements[i]) > max) {
                    max = Number(elements[i]);
                }
            }
        }
    }
    // if array have number values
    for (let i = 0; i < elements.length; i++) {
        //if max unassigned 
        if (!(typeof max == 'number') && typeof elements[i] == 'number') {
            max = elements[i];
        }
        // if max assigned
        if (typeof elements[i] == 'number' && elements[i] > max) {
            max = elements[i];
        };
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
