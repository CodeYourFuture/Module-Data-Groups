function sum(elements) {
    if(!Array.isArray(elements)){// check input is not array, return 0
        return 0;
    }

    let total = 0;

    for (let i =0; i< elements.length; i++){
        if(typeof elements[i]=== "number"){
            total +=elements[i];
        }
    }
    return total;
}

module.exports = sum;
