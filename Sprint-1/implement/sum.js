function sum(elements) {
    return [...elements].filter(num=>!isNaN(num))
            .reduce((sum,number)=>sum+Number(number),0)
}

module.exports = sum;
