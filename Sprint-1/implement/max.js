function findMax(elements) {
    //filter array for numbersOnly
    const numbersOnly = elements.filter(item => !isNaN(item));
    if (numbersOnly.length == 0){ // check if array is empty
        return -Infinity;
    }
    if (numbersOnly.length === 1){ //check if they has one element
        return numbersOnly[0];
    }
    let max = numbersOnly[0];// find a max number
    for (let i=1; i<numbersOnly.length; i++){
        if (numbersOnly[i]> max){
            max = numbersOnly[i];
        }
    }
    return max;
}

module.exports = findMax;
