function findMax(elements) {
    //to filter non-numeric elements
    const numericElement = elements.filter(element => typeof element === 'number'
         && !isNaN(element));

    // if  no element , return infinity
    if(numericElement.length===0){
        return -Infinity;
    }  
    // return max value from the filtered numeric elements
    return  Math.max(...numericElement) ; 
}

module.exports = findMax;
