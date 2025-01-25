// function parseQueryString(queryString) {
//   const queryParams = {};
//   if (queryString.length === 0) {
//     return queryParams;
//   }
//   const keyValuePairs = queryString.split("&");//is responsible for splitting the query string into individual key-value pairs. Let's break it down:

//   for (const pair of keyValuePairs) {
//     const [key, value] = pair.split("=");//Splitting: ["equation", "x", "y+1"]

//     queryParams[key] = value;//=>["x=y+1"] -is an array 
//   }

//   return queryParams;
// }

// module.exports = parseQueryString;

// expect(parseQueryString("equation=x=y+1")).toEqual({
//   "equation": "x=y+1", =>here always"equation" should be a key
function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Skip empty pairs
    if (pair.trim() === "") continue;

    const [key, ...valueParts] = pair.split("=");
    const value = valueParts.join("="); // Rejoin to handle values with `=`

    if (key.trim() === "" && value.trim() === "") continue;

    // Add to queryParams, defaulting missing keys/values to ""
    queryParams[decodeURIComponent(key || "")] = decodeURIComponent(value || "");
  }

  return queryParams;
}

module.exports = parseQueryString;
