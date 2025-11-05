function sum(elements) {
    if (elements.length == 0){ // check if array is empty
        return 0;
    }
     if (elements.length === 1){ //check if array has one element
        return elements[0];
    }
    let sum = 0;
    let isNumbersPresent = elements.some(item => typeof item === 'number' && !isNaN(item));
    for (let i =0; i<elements.length; i++){ //sum of elements
        if (typeof elements[i] === 'number'){ //check if element is number
            sum += elements[i];
        }
        if (isNumbersPresent == false && !isNaN(elements[i])){ //1) check if array doesnt have numbers; 2)check if element can be conversted to number
            sum += parseFloat(elements[i]); // add converted to num element
        }
    }
    return sum
}

module.exports = sum;
