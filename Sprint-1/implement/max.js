function findMax(elements) {
    const newelement = elements.filter((x)=> typeof x=== "number");
    if (newelement.length === 0){
        return -Infinity;
    }
        else {
            return Math.max(...newelement)
    }
        
        ;

}

module.exports = findMax;
