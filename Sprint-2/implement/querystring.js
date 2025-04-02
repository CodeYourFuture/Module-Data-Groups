function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;


//MY RESPONSE

// Function to parse query string into an object of key-value pairs

function parseQueryString(queryString) {
  const queryParams = {}; // Initialize an empty object to store the query parameters
  if (queryString.length === 0) { // If the query string is empty, return the empty object
    return queryParams;
  }
  
  const keyValuePairs = queryString.split("&"); // Split the query string by '&' to get individual key-value pairs

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("="); // Split each pair by '=' to separate the key and value
    queryParams[key] = value; // Assign the value to the corresponding key in the queryParams object
  }

  return queryParams; // Return the populated queryParams object
}

module.exports = parseQueryString;

// Example usage:
console.log(parseQueryString("name=JohnDoe&age=25&country=USA"));
// Expected output: { name: "JohnDoe", age: "25", country: "USA" }
