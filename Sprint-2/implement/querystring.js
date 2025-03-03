function parseQueryString(queryString) {
  const queryParams = {};

  // return an empty object if the query string is empty
  if (queryString.length === 0) {
    return queryParams;
  }

  // remove the leading '?' if it exist
  if (queryString.length[0] === '?') {
    queryString = queryString.slice(1);
  }

  // split the query string into key-value pairs
  const keyValuePairs = queryString.split("&");


  // loop through each pair and add it into queryParams object
  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");

    if (key) { // add the pair if the key is not empty
      queryParams[key] = value ? decodeURIComponent(value) : '';
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
