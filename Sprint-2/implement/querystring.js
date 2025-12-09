// Parses a query string into an object.
// References:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

function parseQueryString(queryString) {
  const queryParams = {};

  // Returns early if the string is empty
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Finds only the first "=" since values may contain "=" too
    const firstEqualsIndex = pair.indexOf("=");

    const key = pair.slice(0, firstEqualsIndex);
    const value = pair.slice(firstEqualsIndex + 1);

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
