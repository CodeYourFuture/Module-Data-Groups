//Given an textarea and a character limit of 200
//When a user has already typed 200 characters into the textarea
//And the user tries to type another character
//Then the extra character should not get added to the textarea.


const textarea = document.querySelector("textarea");
console.Console(textarea.value);


console.log(textarea.maxLength)

const remainingCharacters = textarea.maxLength - textarea.value.length;
console.log(remainingCharacters);