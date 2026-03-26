function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  if (
    typeof queryString !== "string" ||
    !queryString.includes("=") ||
    queryString === undefined
  )
    return "invalid input";
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const arr = [];
    const indexEquality = pair.indexOf("=");
    if (indexEquality !== -1) {
      const sliced = pair.slice(0, indexEquality);
      arr.push(sliced);
      const sliced2 = pair.slice(indexEquality + 1);
      arr.push(sliced2);
      const [key, value] = arr;
      queryParams[key] = value;
    }
  }
  return queryParams;
}

module.exports = parseQueryString;
