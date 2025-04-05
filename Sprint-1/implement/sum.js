function sum(elements) {
    let sum = 0;
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
        for (let i=0; i<elements.length; i++){
           if(!isNaN(elements[i])){
            sum += Number(elements[i]);
           } 
        }
    }

    // if elements contain numbers
    for (let i=0; i<elements.length; i++){
        if (typeof elements[i]== 'number'){
            sum += elements[i];
        }
    }
    return sum;
}

module.exports = sum;
