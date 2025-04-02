
function tally(array) {
    let tallyObj = {};
    if (!Array.isArray(array)){
        return "Invalid input type";
    }
    for(let i=0;i<array.length;i++){
        if(tallyObj[array[i]]){
            tallyObj[array[i]]++;
        }
        else{
            tallyObj[array[i]]=1;
        }
    }
    return tallyObj;
}

module.exports = tally;
