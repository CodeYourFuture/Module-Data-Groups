function tally(itemArray) {
    if (itemArray.length == 0 ) {
      return {};
    }else{
        if(typeof itemArray==="string"){
            throw new Error("invalid input");
        }
    }
    let countArray={};
    for(const item of itemArray ){
        if(countArray.hasOwnProperty(item)){
            countArray[item]++;
        }else{
            countArray[item]=1;
        }
    }
    return countArray;
}

module.exports = tally;
 