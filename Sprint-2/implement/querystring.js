function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (let pair of keyValuePairs) {
    if (pair === "") {
      continue;
    }
    if (pair.includes("+")) {
      pair = pair.replaceAll("+", " ");
    }
    const indexOfFirst = pair.indexOf("=");
    if (indexOfFirst === -1) {
      queryParams[pair] = "";
    } else {
      let key = decodeURIComponent(pair.slice(0, indexOfFirst));
      let value = decodeURIComponent(pair.slice(indexOfFirst + 1));
      queryParams[key] = value;
    }
  }
  return queryParams;
}
module.exports = parseQueryString;
