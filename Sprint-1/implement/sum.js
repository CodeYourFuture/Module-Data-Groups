function sum(elements) {
    //filter the array to be numerical values only
    const numbersOnly = elements.filter((item)=> typeof item === 'number' && !Number.isNaN(item));

    if(numbersOnly.length === 0){
        return 0
    }
    let total = 0 ;
    for( let i = 0 ; i < numbersOnly.length; i ++ ){
        total += numbersOnly[i];
    }
    return total ;
}

module.exports = sum;
