// function createLookup(countryCurrencyPairs) {
//   for( let i = 0; i < countryCurrencyPairs.length; i++) {
//      const countryCurrencyPair = countryCurrencyPairs[i]

//     // console.log({
//     //   countryCurrencyPairs,
//     //   i,
//     //   value: countryCurrencyPairs[i],
//     //   countryCurrencyPair,

//     // })
     
//      //console.log('i am here:', countryCurrencyPairs[[i]])
//      console.log(countryCurrencyPair[])
    
//   }

//   return countryCurrencyPairs;

//   const country = countryCurrencyPair[0]
//   const currency = countryCurrencyPair[1]

//   return{[country]:currency};
  

//   // implementation here
// }

// function createSingleLookup(countryCurrencyPair) {
//   const country = countryCurrencyPair[0]
//   const currency = countryCurrencyPair[1]

//   return{[country]:currency};
// }

// console.log(createLookup([['US', 'USD'], ['CA', 'CAD']]))

// console.log(createSingleLookup(['US', 'USD'])) // return { 'US': 'USD' }

function createLookup(countryCurrencyPairs) {
  return countryCurrencyPairs.reduce((lookup, pair) => {
    const [country, currency] = pair;
    lookup[country] = currency; 
    return lookup;
  }, {});  
}

module.exports = createLookup;


// for (let i = 0; i < onlyNumbers.length; i++) {
//   total += onlyNumbers[i];
//   }
//   return total;