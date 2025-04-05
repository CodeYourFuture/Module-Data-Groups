function findMax(elements) {
    let max;
    // check if elements empty array
    if (elements.length == 0){
        return -Infinity;
    }
    // check if list contains numbers 
    let containsNumbers = false;
    for (let i = 0; i < elements.length; i++){
        if (typeof elements[i] == 'number'){
        containsNumbers = true;
        break;
        }
    }
    // if elements does not contain numbers we should search for values that can be converted to numbers
    if (containsNumbers == false){
        for (let i = 0; i < elements.length; i++){
            //check if variable can be converted to number and check if variable max is assigned
            if (!(typeof max == 'number') && !isNaN(elements[i])){
                // if both true assign converted value to max
                max = Number(elements[i]);
            }
            // if max is already assigned and elements[i] value can be converted to number
            if (typeof max == 'number' && !isNaN(elements[i])){
                // check if new walue is greater than max
                if (Number(elements[i]) > max){
                    max = Number(elements[i]);
                }
            }
        }
    }
    // if array contains numeric value we search max only among them
    for (let i=0; i<elements.length; i++ ){
        //if max unassigned - we assigning  first numeric value from elements
        if (!(typeof max == 'number') && typeof elements[i] == 'number'){
            max = elements[i];
        }
        // compare each numeric value with max, and replace max if new value greater
        if (typeof max == 'number'){
            if (elements[i] > max){
                max = elements[i];
            }
        }
    }
    return max;
}

module.exports = findMax;
