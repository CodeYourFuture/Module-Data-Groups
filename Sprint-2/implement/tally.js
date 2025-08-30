function tally(givenArray) {
    if (!Array.isArray(givenArray)){
        return "Input should be an array"
    } else {
        const resultObject = {};
        for  (let item of givenArray){
            resultObject[item] = (resultObject[item] || 0) + 1;
        }
        return resultObject
    }
}

module.exports = tally;
