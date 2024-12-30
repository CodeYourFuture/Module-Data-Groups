function createLookup(array) {
  return array.reduce((obj, item) => {
    obj[item[0]] = item[1];  
    return obj;
  }, {});
}

module.exports = createLookup;
let x = createLookup([['US', 'USD'], ['CA', 'CAD']]);
console.log(x)