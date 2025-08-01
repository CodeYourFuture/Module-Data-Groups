function tally(itemArray) {
    if (!Array.isArray(itemArray)) {
        throw new Error("invalid input");
    }
   
    if (itemArray.length == 0 ) {
      return {};
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
 