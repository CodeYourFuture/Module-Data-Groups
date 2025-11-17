function createLookup(arr) {
  if(!arguments.length) {
    throw new Error('No arguments provided');
  }
  const result = {};
  if (!Array.isArray(arr)) {
    return result;
  }
  for (const item of arr) {
    if (Array.isArray(item) && item.length >= 2) {
      
      const [country, currency] = item;

      if (currency === null || currency === undefined) {
        continue;
      }
      

      if (Array.isArray(currency) && typeof country === "string") {
         result[country]
           ? (result[country] = [result[country], currency])
           : (result[country] = currency);
      }
      
      if (country.length && currency.length && typeof country === 'string' && typeof currency === 'string') {
         result[country]
           ? (result[country] = [result[country], currency])
           : (result[country] = currency);
      }
    }
  } 
  return result;
}

module.exports = createLookup
