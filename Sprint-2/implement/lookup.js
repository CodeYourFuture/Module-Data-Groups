function createLookup(arr) {
  let obj ={}
  if (arr.length === 2){
    let obj ={}
    let key= arr[0]
    let value = arr[1]
    obj[key] = value
    return obj
  }else{
  for(let pair of arr){ //loops through arr to find and seperate subarrays
    let [key, value] = pair
      obj[key] = value
    }
  
  return obj
  }
  // implementation here
}


console.log(createLookup([['US', 'USD'], ['CA', 'CAD'], ['SA', 'ZAR']]))
/*Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
    let obj ={}
  let key= arr[0]
  let value = arr[1]
  obj[key] = value
 
*/
module.exports = createLookup;
