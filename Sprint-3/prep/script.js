const textarea = document.querySelector("textarea");
console.log(textarea.value);
console.log(textarea.maxLength);
console.log(textarea.value.length);
const remainingCharacters = textarea.maxLength - textarea.value.length;
console.log(remainingCharacters);

const remainingCharP = document.querySelector("#character-limit-info");
remainingCharP.textContent = `You have ${remainingCharacters} characters left.`

function updateCharacterLimit(){
    const a = textarea.maxLength - textarea.value.length;
    remainingCharP.innerText = `You have ${a} characters left.`
}
textarea.addEventListener("keyup",updateCharacterLimit);