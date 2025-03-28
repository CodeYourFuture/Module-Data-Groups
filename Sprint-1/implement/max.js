function findMax(elements) {
    // inf includes non-numerical and numberical
    //ignore non numerical
    let filtered = elements.filter(element => typeof element === 'number')

        //check if empty
        if (filtered.length === 0) {
            return -Infinity;
        } else if (filtered.length === 1) {
            return filtered[0]
        } else {
            //find max
            return Math.max(...filtered)
        }
        
    }


module.exports = findMax;
