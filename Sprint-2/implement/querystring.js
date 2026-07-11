function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  const replacePlusWithSpace = (str) => str.replace(/\+/g, " ");

  for (const pair of keyValuePairs) {
    if (pair === "") continue;

    const [rawKey, ...rawValueParts] = pair.split("=");
    const keyWithSpaces = replacePlusWithSpace(rawKey || "");
    const valueWithSpaces = replacePlusWithSpace(rawValueParts.join("=") || "");

    const key = decodeURIComponent(keyWithSpaces);
    const value = decodeURIComponent(valueWithSpaces);

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
