function parseQueryString(queryString) {
  const queryParams = {};

  // return if input is 0
  if (queryString.length === 0) {
    return queryParams;
  }

  // replace all + by ' '
  queryString = queryString.replaceAll("+", " ");

  // split by &
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair.length > 0) {
      const parts = pair.split("=");
      // first part as the key
      const key = decodeURIComponent(parts[0]);
      // second to last parts as the value
      const value = decodeURIComponent(parts.slice(1).join("="));

      // if no key then assign new value
      if (!(key in queryParams)) {
        queryParams[key] = value;
        // if array then push a new value to it
      } else if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value);
        // if not array then turn into array with old and new values
      } else {
        queryParams[key] = [queryParams[key], value];
      }
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
