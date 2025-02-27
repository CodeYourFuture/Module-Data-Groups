
function tally(array) {
    let myObj = {}
    return array.reduce(function(myObj, cur){
        myObj[cur] = (myObj[cur] || 0) + 1
        console.log(myObj);
        return myObj
    }, myObj)
}


console.log(tally([1,1,3,3,5,6]));
module.exports = tally;
