// const parseQueryString = require("./04.single-query-string")

function parseQueryString(queryString){
const queryParams = {};
if(parseQueryString.length === 0){
  return queryParams;
}

const keyValuePairs = parseQueryString.split("&")

for(const pair of keyValuePairs){
  const [key, value] = pair.split("=")
  queryParams[key] = value
}
return queryParams;

};

console.log(parseQueryString("sort=lowest&color=yellow"));
module.exports = parseQueryString;

