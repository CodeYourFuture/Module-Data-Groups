function createLookup(nestedArr) {
  const noneNested =  nestedArr.flat(Infinity)
 const result = {}
 for(let i = 0; i < noneNested.length; i += 2){
  const cuntry = noneNested[i];
  const currency = noneNested[i + 1];
  result[cuntry] = currency
 }
return result;
}

module.exports = createLookup;
