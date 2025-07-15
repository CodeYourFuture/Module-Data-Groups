function parseQueryString(queryString) {
  let queryParamsObject = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  for (const pair of keyValuePairs) {
    const array = pair.split("=");
    const key = decodeURIComponent(array[0]);
    const value = queryString.slice(array[0].length + 1);// +1 length to cut "=" after key
    queryParamsObject[key] = decodeURIComponent(value);
  }
  console.log(queryParamsObject);
  return queryParamsObject;
}
module.exports = parseQueryString;
