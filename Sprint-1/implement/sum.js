function sum(elements) {
    if (elements.length == 0) {
        return 0;
    }
    let sum = 0;
    // if array does not have number values
    if (!checkNumbersPresence(elements)) {
        for (let i = 0; i < elements.length; i++) {
            if (!isNaN(elements[i])) {
                sum += Number(elements[i]);
            }
        }
    }

    // if array have number values
    for (let i = 0; i < elements.length; i++) {
        if (typeof elements[i] == 'number') {
            sum += elements[i];
        }
    }
    return sum;
}

function checkNumbersPresence(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            return true;
        }
    }
    return false;
}

module.exports = sum;
