function decode(text) {
  return decodeURIComponent(text.replace(/\+/g, " "));
}

function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair === "") continue;

    const index = pair.indexOf("=");
    const separator = index !== -1;
    const rawKey = separator ? pair.slice(0, index) : pair;
    const rawValue = separator ? pair.slice(index + 1) : "";

    const key = decode(rawKey);
    const value = decode(rawValue);
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
