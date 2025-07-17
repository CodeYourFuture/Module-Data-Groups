function sum(elements) {
    if (elements.length == 0) {
        return 0;
    }

    let numericValuesSum = 0;
    let conversableValuesSum = 0;
    let containsNumericValues = false;

    for (let i = 0; i < elements.length; i++) {
        if (typeof elements[i] == 'number') {
            numericValuesSum += elements[i];
            containsNumericValues = true;
        } else if (!isNaN(elements[i])) {
            conversableValuesSum += Number(elements[i]);
        }
    }

    if (containsNumericValues) {
        return numericValuesSum;
    } else {
        return conversableValuesSum;
    }
}

module.exports = sum;
