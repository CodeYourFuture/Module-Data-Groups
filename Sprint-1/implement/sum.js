function sum(elements) {
    if(!Array.isArray(elements)){
        throw new TypeError("expected an array")
    }
         return elements
        .filter(element => typeof element === "number")
        .reduce((acc, num) => acc + num, 0);
        
}

module.exports = sum;
