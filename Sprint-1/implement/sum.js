function sum(elements) {
    if (!Array.isArray(elements)){
        throw new Error("sum requires an array of numbers");
    }
    for (const item of elements){
        if (typeof item !== 'number'){
            throw new Error("sum requires an array of numbers");
        }
    }
    let result = 0;
    for (let i = 0; i < elements.length; i++){
        result += elements[i]
    }
    return result
}

module.exports = sum;
