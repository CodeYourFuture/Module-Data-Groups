function parseQueryString(queryString) {
  const queryParams = {};
   if (queryString.length === 0) {
     return queryParams;
   } 
  const keyValuePairs = queryString.split("&");
  const emptyElement = "";

  for (i = 0; i < keyValuePairs.length; i++) {
    const currentPair = keyValuePairs[i];
    if (currentPair !== emptyElement) {
      const index = currentPair.indexOf("=");
      if (index !== -1) {
        const key = currentPair.slice(0, index);
        const value = currentPair.slice(index + 1);
        const decodeKey = decodeURIComponent(key);
        const decodeValue = decodeURIComponent(value);
        const replacedKey = decodeKey.replace("+", " ");
        const replacedValue = decodeValue.replaceAll("+", " ");
        if (queryParams.hasOwnProperty(replacedKey)) {
          if (Array.isArray(queryParams[replacedKey])) {
            queryParams[replacedKey].push(replacedValue);
          } else {
            queryParams[replacedKey] = [
              queryParams[replacedKey],
              replacedValue,
            ];
          }
        } else {
          queryParams[replacedKey] = replacedValue;
        }
      } else if (index === -1) {
        const key = currentPair;
        const value = "";
        queryParams[key] = value;
      }
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
