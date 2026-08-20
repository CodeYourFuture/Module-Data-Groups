function parseQueryString(queryString) {
  const queryParams = {};

  // If the query string is empty, return an empty object
  if (queryString.length === 0) {
    return queryParams;
  }

  // Split the query string into separate key-value pairs
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Ignore empty pairs
    if (pair === "") {
      continue;
    }

    // Find the first "="
    const equalsPosition = pair.indexOf("=");

    let key;
    let value;

    // If there is no "="
    if (equalsPosition === -1) {
      key = pair;
      value = "";
    } else {
      // Everything before "=" is the key
      key = pair.substring(0, equalsPosition);

      // Everything after the first "=" is the value
      value = pair.substring(equalsPosition + 1);
    }

    // Replace "+" with spaces and decode special characters
    key = decodeURIComponent(key.replace(/\+/g, " "));
    value = decodeURIComponent(value.replace(/\+/g, " "));

    // If the key already exists, store multiple values in an array
    if (queryParams[key] === undefined) {
      queryParams[key] = value;
    } else if (Array.isArray(queryParams[key])) {
      queryParams[key].push(value);
    } else {
      queryParams[key] = [queryParams[key], value];
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
