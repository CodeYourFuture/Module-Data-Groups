const textarea = document.querySelector("textarea");
console.log(textarea.value);
console.log(textarea.maxLength);
updateCharacterLimit();

function updateCharacterLimit() {
    const remainingCharacters = textarea.maxLength - textarea.value.length;
    const charactersLeftP = document.querySelector("#character-limit-info");
    charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;
}

textarea.addEventListener("keyup", updateCharacterLimit);