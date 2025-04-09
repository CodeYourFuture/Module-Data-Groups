function tally(array) {
    if (Array.isArray(array) === false) {
        throw new Error("Invalid input");
    }
    return array.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}
/*
{} is the initial value of the accumulator(acc).
accumulator(acc) is an empty object. This object will store the item counts.
item is the current element being processed from the array.
acc[item] = (acc[item] || 0) + 1 :
(acc[item] || 0) checks if acc[item] already exists. If it does, it uses its current value; otherwise, it defaults to 0.
+ 1 increments the count for the current item.
The result is assigned back to acc[item], updating the count.
*/
module.exports = tally;
