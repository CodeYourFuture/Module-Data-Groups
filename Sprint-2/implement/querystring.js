function parseQueryString(queryString) {
  const queryParams = {};

  for (const pair of queryString.split("&")) {
    if (pair === "") continue;

    const eq = pair.indexOf("=");
    const key = eq === -1 ? pair : pair.slice(0, eq);
    const value = eq === -1 ? "" : pair.slice(eq + 1);

    const decodedKey = decodeURIComponent(key.split("+").join(" "));
    const decodedValue = decodeURIComponent(value.split("+").join(" "));

    if (decodedKey in queryParams) {
      if (Array.isArray(queryParams[decodedKey])) {
        queryParams[decodedKey].push(decodedValue);
      } else {
        queryParams[decodedKey] = [queryParams[decodedKey], decodedValue];
      }
    } else {
      queryParams[decodedKey] = decodedValue;
    }
  }
  return queryParams;
}

module.exports = parseQueryString;
