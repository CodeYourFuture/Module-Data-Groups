function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    // if the queryString is empty, we return an empty object
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    //const [key, value] = pair.split("="); <- there is an issue with this as it will split ALL parts of a querystring input that has an "=" in it.
    //however, we only want to split at the first occurrence of the "=" to create a key value pair format, therefore we can use the String.prototype indexOf() that searches the string and returns the index of the first occurrence of "="  instead and then slices the string at that index
    const index = pair.indexOf("=");
    if (index === -1) {
      // if there is no "=" in the pair, we assign the pair as a key with an empty string as its value
      queryParams[pair] = "";
    } else {
      const key = pair.slice(0, index); //start at index 0 and go up to the index of the first "=" and assign it to key
      const value = pair.slice(index + 1); // assign the value to everything after the first "=" by slicing from index + 1 to the end of the string
      queryParams[key] = value; // append the key-value pair to the queryParams object
    }
  }
  return queryParams;
}

module.exports = parseQueryString;
