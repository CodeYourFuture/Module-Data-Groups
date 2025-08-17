function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString === "") { //removed the .length method
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    //const [key, value] = pair.split("="); //this line is making kak and its so frustrating cause it assigns value ='x' (test case 1) and leaves the rest of the equation.
    const parts = pair.split("=");
    const key = decodeURIComponent(parts[0]);
    const value = parts.length > 1 ? decodeURIComponent(parts.slice(1).join('=')) : ''; //clunky but it works to split them and stitch it together again
    queryParams[key] = value;
  }
  

  return queryParams;
}

module.exports = parseQueryString;