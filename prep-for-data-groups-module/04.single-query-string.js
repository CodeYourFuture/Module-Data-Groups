/*Given a query string and a function parseQueryString,
When we call parseQueryString with a query string,
Then it should return an object with the key-value pairs*/

// parseQueryString("colour=blue&sort=newest");
// should return { colour: "blue", sort: "newest" }`

// const parseQueryString =" https://example.com/widgets?colour=blue&sort=newest"

// parsing 0ne single param example
function parseQueryString(queryString){
  const queryParams = {};
//step 1: we will first separate the query strings by "="
const keyValuePair = queryString.split("=");
const key = keyValuePair[0];
const value = keyValuePair[1];
// step 2: use key value to build the object by mutating and empty object
queryParams[key] = value;

//step 3: return empty object if queryParams id " " else return queryParams
if(queryParams === ""){
  return {};
}else{
  return  queryParams;
};
}

console.log(parseQueryString("color=blue"));
console.log(parseQueryString(" "));

module.exports = parseQueryString;
