function createLookup(arrayOfPairs) {
  let obj = {};
 
  for (let i = 0; i < arrayOfPairs.length; i++) {
    const [key, value] = arrayOfPairs[i];
    obj[key] = value;
    }
  return obj;
};

module.exports = createLookup;
