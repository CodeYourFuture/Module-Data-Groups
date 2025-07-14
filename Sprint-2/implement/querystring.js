function parseQueryString(queryString) {
  let queryParamsObject = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  let decodedParams = decodeURIComponent(queryString).replace("%20", " ");
  console.log(decodedParams);
  const keyValuePairs = decodedParams.split("&");
  for (const pair of keyValuePairs) {
    const array = pair.split("=");
    const key = array[0]
    const value = decodedParams.slice(array[0].length + 1);// +1 length to cut "=" after key
    queryParamsObject[key] = value;
  }
  console.log(queryParamsObject);
  return queryParamsObject;
}
parseQueryString("equation=x=y+1");
parseQueryString("query=hello%2520world");
module.exports = parseQueryString;
