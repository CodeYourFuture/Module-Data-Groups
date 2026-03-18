/**
 * parseQueryString()
 *
 * Parses a query string into an object of key-value pairs.
 *
 * Example:
 * parseQueryString("name=Richard&city=Sheffield")
 * returns { name: "Richard", city: "Sheffield" }
 */

function parseQueryString(queryString) {
  const queryParams = {};

  // Return an empty object if the input is an empty string
  if (typeof queryString !== "string" || queryString.length === 0) {
    return queryParams;
  }

  // Split the full query string into key-value pairs
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Skip empty pairs, for example from a trailing "&"
    if (pair === "") {
      continue;
    }

    // Find the position of the first "="
    const separatorIndex = pair.indexOf("=");

    // If there is no "=" sign, treat it as a key with an empty value
    if (separatorIndex === -1) {
      queryParams[pair] = "";
      continue;
    }

    // Extract the key and everything after the first "=" as the value
    const key = pair.slice(0, separatorIndex);
    const value = pair.slice(separatorIndex + 1);

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
