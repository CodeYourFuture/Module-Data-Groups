function decode(text) {
  const withSpaces = text.replace(/\+/g, " ");
  try {
    return decodeURIComponent(withSpaces);
  } catch {
    return withSpaces;
  }
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

    if (key in queryParams) {
      if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value);
      } else {
        queryParams[key] = [queryParams[key], value];
      }
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
