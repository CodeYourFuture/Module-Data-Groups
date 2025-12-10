// Parses a query string into an object.
// References:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// Sprint-2/implement/querystring.js

function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) return queryParams;

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    const equalsIndex = pair.indexOf("=");

    if (equalsIndex === -1) {
      // Handle keys with no value
      const key = decodeURIComponent(pair);
      queryParams[key] = null;
    } else {
      const key = decodeURIComponent(pair.slice(0, equalsIndex));
      const value = decodeURIComponent(pair.slice(equalsIndex + 1));
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
