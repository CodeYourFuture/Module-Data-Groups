function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    //console.log(pair.split("="));
    const array = pair.split("=");
    let value = '';
    for(let i = 1; i<array.length; i++){
      value += array[i];
      if (i != array.length - 1){
        value += '=';
      }
    }
    queryParams[array[0]] = value;
  }
  return queryParams;
}
console.log(parseQueryString("equation=x=y+1"));

module.exports = parseQueryString;
