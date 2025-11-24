function parseQueryString(queryString) {
  const queryParams = {};
  if (typeof queryString !== "string" || !queryString) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if(pair===""){
      continue
    }
    const equalIndex=pair.indexOf("=")
    if (equalIndex === -1) {
      queryParams[pair]="";
      continue
    }
    const key=pair.substring(0,equalIndex)
    const value=pair.substring(equalIndex+1)
    queryParams[key]=value
    
  }

  return queryParams;
}
//console.log(parseQueryString("equationxy+1"));

module.exports = parseQueryString;




