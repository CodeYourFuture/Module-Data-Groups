function sum(arr) {
    let total = 0;
    for (let el of arr) { 
        if (typeof el === "number") { 
            total += el;
        }  
    }
    return total;
}

module.exports = sum;
