function findMax(elements) {
    const numbers = elements.filter(element => typeof element === "number");
    
    if(numbers.length === 0){
        return -Infinity;
    }else if(numbers.length === 1){
        return numbers[0];
    }else{
        return Math.max(...numbers);
    }
}

module.exports = findMax;
