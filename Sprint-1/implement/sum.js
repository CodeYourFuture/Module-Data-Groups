function sum(elements) {
  //it checks if the parameter is an array, if not it returns the message 'not an array'
  if (!Array.isArray(elements)) return "not an array";
  //it filters out all non-numbers
  const elementsFiltered = elements.filter((item) => typeof item == "number");
  //if the array is empty it returns 0
  if (elementsFiltered.length === 0) return 0;
  //if the array has only one number it returns that number
  if (elementsFiltered.length === 1) return elementsFiltered[0];
}

module.exports = sum;
