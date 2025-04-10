function createLookup(complexArray) {
  let object ={};
  for (let i=0; i<complexArray.length; i++){
    object[complexArray[i][0]] = complexArray[i][1];
  }
  return object;

}

module.exports = createLookup;
