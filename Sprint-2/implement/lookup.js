function createLookup(array) {
  let object={}
  for(let element of array){
    let key=element[0]
    let value=element[1]
    object[key]=value
  }
  return object
}

console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);


module.exports = createLookup;
