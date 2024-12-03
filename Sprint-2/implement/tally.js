function tally(argument) {
     if(argument.length == 0 ){
        return {}
     }
     if(!Array.isArray(argument)){
      throw new Error("Invalid input");
     }
     else{
      
      return argument.reduce((accumulator, item) => {
        accumulator[item] = (accumulator[item] || 0) + 1;
        return accumulator;
      }, {});

     }
     
}

module.exports = tally;
