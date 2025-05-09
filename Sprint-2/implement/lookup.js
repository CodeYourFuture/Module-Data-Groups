

function createLookup(array) {
  let object = {};
  
  array.forEach(([country, currency]) => {
    object[country] = currency;
  });
  
  return object;
}


// function sortCats(cats) {
//   let kitty = {};

//   cats.forEach(([catNameKey, catNameValue, age]) => {
//     kitty[catNameKey] = catNameValue;
//     kitty[age] = parseInt(age);
//   })
//   return kitty
// }
module.exports = createLookup;

