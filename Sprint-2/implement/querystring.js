function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) return queryParams;

  const keyValuePairs = queryString.split("&").filter((item) => item !== "");

  for (let pair of keyValuePairs) {
    // Replace '+' with spaces
    pair = pair.replace(/\+/g, " ");

    const eqIdx = pair.indexOf("=");

    let keyPair, valuePair;

    if (eqIdx === -1) {
      keyPair = pair;
      valuePair = "";
    } else {
      keyPair = pair.slice(0, eqIdx);
      valuePair = pair.slice(eqIdx + 1);
    }

    const key = decodeURIComponent(keyPair);
    const value = decodeURIComponent(valuePair);

    // Handle duplicates
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
