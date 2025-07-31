function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // let [key, value = ""] = pair.split("=");
    let [key, ...restOfString] = pair.split("=");

    value = restOfString.join("=");
    console.log(value);
    value = decodeURIComponent(value);
    queryParams[key] = value;
  }
  return queryParams;
}

console.log(parseQueryString("name=John%20Doe"));
module.exports = parseQueryString;
