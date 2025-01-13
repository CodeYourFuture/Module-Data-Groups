function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  console.log("key value pairs after spliting &:", keyValuePairs)

  for (const pair of keyValuePairs) {
    const separatorIndex = pair.indexOf("=");
    let key, value;

    if (separatorIndex !== -1) {
      key = decodeURIComponent(pair.slice(0, separatorIndex));
      value = decodeURIComponent(pair.slice(separatorIndex + 1));
    } else {
      // Handle keys without values (e.g., "key&key2=value2")
      key = decodeURIComponent(pair);
      value = "";
    }

    queryParams[key] = value;
  }
  

  return queryParams;
}

console.log(parseQueryString("equation=x=y+1"))

module.exports = parseQueryString;
