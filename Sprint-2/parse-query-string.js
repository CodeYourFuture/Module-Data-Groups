function parseQueryString2(argument){
    let targetObject = {};
    // use this conditional statement in case the query string is empty!
    if (argument.length === 0){
        return targetObject
    }
    //converting string to array using &
    const STRING_TO_ARRAY = argument.split("&");
    //using reduce to convert each item inside [ 'sky=blue', 'people=happy', 'pockets=full' ] to an object
    const A = STRING_TO_ARRAY.reduce((object,item)=>{
        const [a,b] = item.split("=");
        object[a] = b;
        return object; //attention: i must return acc in each iteration! or it breaks -_-
    },{});
    return A;
}
let testString = "sky=blue&people=happy&pockets=full";
console.log(parseQueryString2(testString));

//another version to write this function: (for practice purposes)
function parseQueryString3(argument){
    let targetObject = {};
    // use this conditional statement in case the query string is empty!
    if (argument.length === 0){
        return targetObject
    }
    // converting string to array using &
    const STRING_TO_ARRAY = argument.split("&");
    // 'return STRING_TO_ARRAY.map(item => item.split("="))' outputs : [ [ 'sky', 'blue' ], [ 'people', 'happy' ], [ 'pockets', 'full' ] ]
    const ARRAY_FINAL = STRING_TO_ARRAY.map(item => item.split("="));
    // Object.fromEntries takes the nested array and interprets each small array as a key-value pair:
    return Object.fromEntries(ARRAY_FINAL);

}
console.log(parseQueryString3("sky=blue&people=happy&pockets=full"));

//a for loop version of writing this function(practice):
function parseQueryString4(argument){
    const STRING_TO_ARRAY = argument.split("&");
    const TARGET_OBJECT = {};
    if (argument.length === 0){
        return TARGET_OBJECT
    }
    for(let ix = 0; ix< STRING_TO_ARRAY.length; ix++ ){
        const [a, b] = STRING_TO_ARRAY[ix].split("=");
        TARGET_OBJECT[a]=b; //attention: here there's no need for concatenation. every loop run, TARGET_OBJECT concatenates automatically.
    }
    return TARGET_OBJECT;
}
console.log(parseQueryString4("sky=blue&people=happy&pockets=full"));

//a while loop version of writing this function(practice):
function parseQueryString5(argument){
    const STRING_TO_ARRAY = argument.split("&");
    const TARGET_OBJECT = {};
    if (argument.length === 0){
        return TARGET_OBJECT
    }
    let ix = 0; 
    while (ix < STRING_TO_ARRAY.length){
        const[a,b] = STRING_TO_ARRAY[ix].split("=");
        TARGET_OBJECT[a]=b;
        ix++;
    }
    return TARGET_OBJECT;
}
console.log(parseQueryString5("sky=blue&people=happy&pockets=full"));

// a for (.. of ..) loop version of this function (practice):
function parseQueryString6(argument){
    const STRING_TO_ARRAY = argument.split("&");
    const TARGET_OBJECT = {};
    if (argument.length === 0){
        return TARGET_OBJECT
    }
    for(const ITEM of STRING_TO_ARRAY){
        const [a,b] = ITEM.split("=");
        TARGET_OBJECT[a]=b;
    }
    return TARGET_OBJECT;
}
console.log(parseQueryString6("sky=blue&people=happy&pockets=full"));
