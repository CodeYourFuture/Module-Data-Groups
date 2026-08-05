function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair.length === 0) {
      continue;
    } else {
      const equalityPosition = pair.indexOf("=");

      if (equalityPosition === -1) {
        queryParams[pair] = "";
      } else {
        const key = decodeURIComponent(pair.slice(0, equalityPosition));
        const replacedKey = key.replace(/\+/g, " ");

        const value = decodeURIComponent(pair.slice(equalityPosition + 1));
        const replacedValue = value.replace(/\+/g, " ");

        if (queryParams[replacedKey]) {
          if (!Array.isArray(queryParams[replacedKey])) {
            queryParams[replacedKey] = [queryParams[replacedKey]];
          }

          queryParams[replacedKey].push(replacedValue);
        } else {
          queryParams[replacedKey] = replacedValue;
        }
      }
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
