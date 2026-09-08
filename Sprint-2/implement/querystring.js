// Explanation:
// Each "&"-separated piece is one key-value pair. Empty pieces (from "&&" or a
// trailing "&") are skipped. We split on the first "=" only, so a value may
// itself contain "=", and a piece with no "=" gets an empty string value.
// decode() turns "+" into a space and decodes percent-encoded characters.
// If the same key appears more than once, its values are collected into an
// array instead of overwriting each other.

function decode(text) {
  return decodeURIComponent(text.replaceAll("+", " "));
}

function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");
  for (const pair of keyValuePairs) {
    if (pair === "") {
      continue;
    }

    const equalsIndex = pair.indexOf("=");
    let key;
    let value;
    if (equalsIndex === -1) {
      key = decode(pair);
      value = "";
    } else {
      key = decode(pair.slice(0, equalsIndex));
      value = decode(pair.slice(equalsIndex + 1));
    }

    if (!(key in queryParams)) {
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
