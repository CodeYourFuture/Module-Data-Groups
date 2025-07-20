function sum(elements) {
  //it checks if the parameter is an array, if not it returns the message 'not an array'
  if (!Array.isArray(elements)){
    console.log('not an array') 
    return null};
  
  //it filters out all non-numbers including NaN
  const elementsFiltered = elements.filter((item) => typeof item ==="number"&& !Number.isNaN(item));
  //if the array is empty it returns 0
  if (elementsFiltered.length === 0) return 0;
  //if the array has only one number it returns that number
  if (elementsFiltered.length === 1) return elementsFiltered[0];
  
  //declares a variable and sets its value to 0
  let sumArray=0;
  //goes through every element of the array and adds it up
  for(let i=0;i<elementsFiltered.length;i++){
    sumArray+=elementsFiltered[i];
  }
  return sumArray;
}
console.log(sum([1,2]))

module.exports = sum;
