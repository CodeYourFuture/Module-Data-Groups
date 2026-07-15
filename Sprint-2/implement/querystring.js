function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair === "") continue;

    const [keyPart, ...valueParts] = pair.split("=");
    const rawKey = keyPart.trim().replace(/\+/g, " ");
    const rawValue = valueParts.join("=").trim().replace(/\+/g, " ");
    const key = decodeURIComponent(rawKey);
    const value = decodeURIComponent(rawValue);

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
