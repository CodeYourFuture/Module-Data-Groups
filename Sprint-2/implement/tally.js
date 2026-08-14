function tally(arr) {
    const result = arr.reduce((obj, item) => {
        if (obj [item]) {
            obj[item] = obj[item] + 1;
        }
        else{
            obj[item] = 1;
        }
        return obj; 
    }, {});
    
    return result;
}
module.exports = tally;
