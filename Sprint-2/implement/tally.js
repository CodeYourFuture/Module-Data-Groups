function tally(arr) {

    if (!Array.isArray(arr)) {
        throw new Error(`Tally can only count occurences of unique items in arrays. You passed it something that isn't an array.`)
    }

    counter = {};
    arr.forEach((item) => {
        counter[item] = (counter[item]||0) +1;
    });

    return counter;
}


/* // .reduce() version. I find this less easy to understand/read

const tally = arr.reduce((acc,item) => {
    acc[item] = (acc[item]||0) + 1;
    return acc;
}, {}); 

    
// arr.reduce(function, initial accumulator value).
// function: fn(accumulator,currentArrayItem)
// .reduce() calls the function once for every item in the array it was called on */

module.exports = tally;
