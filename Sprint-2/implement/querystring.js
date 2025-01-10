function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...valueStr] = pair.split("=");
    //Checks whether the array valueParts has at least one element. If valueParts.length > 0,
    // it evaluates to true; otherwise, it evaluates to false.
    // if it's true > valueParts.join("=") and if it's false > undefined
    const decodedKey = decodeURIComponent(key);
    const decodeValue = valueStr.length > 0 ? decodeURIComponent(valueStr.join("=")) : undefined;
    queryParams[decodedKey] = decodeValue;
  }

  return queryParams;
}

module.exports = parseQueryString;
