function dedupe(inputArray) {

     // if input array empty then return a error message "array cannot be empty"

    // a var [] to save each new char it finds from the input array[]
    //inside this function we need to search through the input array and if one of a kind then add the element to the new array of unique characters.
    // return the array of the unique characters

    // Check if the input array is empty
    if (inputArray.length === 0) {
      //return "Array cannot be empty"; // this line needs to change to return a empty array
      return [];
    }
  
    // Create an empty array to store unique elements
    const uniqueArray = [];
  
    // Loop through the input array
    for (let i = 0; i < inputArray.length; i++) {
      // Check if the current element is not already in the unique array
      if (!uniqueArray.includes(inputArray[i])) {
        uniqueArray.push(inputArray[i]); // Add the element to the unique array
      }
    }
  
    // Return the array of unique elements
    return uniqueArray;
  }
  

  module.exports = dedupe;


