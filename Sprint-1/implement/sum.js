function sum(elements) {
    let sumNumbers = 0; // initialize sumNumber to 0

    for (let i of elements){
        if(typeof i === "number" && !isNaN(i)) { // check for valid number
            sumNumbers += i; // add the number to the sumNumbers
        }
    }

    return sumNumbers;
}

module.exports = sum;
