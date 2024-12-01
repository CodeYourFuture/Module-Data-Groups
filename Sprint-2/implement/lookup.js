//the function i came up with:
function createLookup_myVersion(argument) {
  let result = argument.reduce((a,b)=>{
    a[b[0]] = b[1];
    return a;
  },{})
  return result;
}
let test = [['US', 'USD'], ['CA', 'CAD']];
console.log(createLookup_myVersion(test));

//MDN version:
function createLookup(arg){
  return Object.fromEntries(arg);
}
console.log(createLookup(test));
module.exports = createLookup;
