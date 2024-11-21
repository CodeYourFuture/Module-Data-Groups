function tally(list) {
    let count = {};
    if(list.length == 0){
        return {};
    }
    if(!Array.isArray(list)){
        throw new Error("invalid input, input must be an array");
    }
    else{
        for (let item of list) {
            count[item] = (count[item] || 0) + 1;
        }
    }return count;
}
console.log(tally(["a", "b", "c", "c", "b"]));
module.exports = tally;

