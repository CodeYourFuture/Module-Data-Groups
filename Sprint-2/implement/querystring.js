function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  let keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue; // continue is to skip empty strings
    let [key, ...values] = pair.split("=");

    key = decodeURIComponent(key.replace(/\+/g, " "));
    const value = decodeURIComponent(values.join("=").replace(/\+/g, " "));

    /* decodeURIComponent function decodes percent encoded characters 
     "replace" swaps one character with another 
     (/../) means the begining and end of a regex pattern (better for characters)
     '\+' is an escaped '+' because it has its own function in coding  */

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
