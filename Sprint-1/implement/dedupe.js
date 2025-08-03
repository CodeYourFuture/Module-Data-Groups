function dedupe(duplicate) {

  //it checks that the parameter is an array
  if (!Array.isArray(duplicate)) return "not an array";

  //declares a variable with the same  value of duplicate but with only unique elements
  const uniqueDuplicate=[...new Set(duplicate)];

  return uniqueDuplicate;
  
}





module.exports = dedupe;
