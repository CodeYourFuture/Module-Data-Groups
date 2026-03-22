const characterLimit = 200;
const textarea = document.querySelector("textarea");


function updateCharacterLimit(){

const remainingCharacters = characterLimit - textarea.value.length;
const limitDisplay = document.querySelector("#character-limit-info");
limitDisplay.textContent = `you have ${remainingCharacters} characters remaining`;
}
textarea.addEventListener("keyup", updateCharacterLimit);