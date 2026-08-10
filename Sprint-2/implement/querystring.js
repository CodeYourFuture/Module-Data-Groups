function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) return queryParams;

  const keyValuePairs = queryString.split("&").filter(pair => pair.length > 0);

  for (const pair of keyValuePairs) {
    const eqIndex = pair.indexOf("=");
    const rawKey = eqIndex === -1 ? pair : pair.slice(0, eqIndex);
    const rawValue = eqIndex === -1 ? "" : pair.slice(eqIndex + 1);

    const key = decodeURIComponent(rawKey.replace(/\+/g, " "));
    const value = decodeURIComponent(rawValue.replace(/\+/g, " "));

    if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
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
