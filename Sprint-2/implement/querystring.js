function parseQueryString(queryString) {
  let queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  for (const pair of keyValuePairs) {
    const array = pair.split("=");
    const key = array[0]
    const value = queryString.slice(array[0].length + 1);// +1 length to cut "=" after key
    queryParams[key] = value;
  }
  console.log(queryParams);
  return queryParams;
}

module.exports = parseQueryString;
