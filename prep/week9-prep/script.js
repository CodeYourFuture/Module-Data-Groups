// const textarea = document.querySelector("textarea");
// const remainingCharacters = textarea.maxLength - textarea.value.length;

// const charactersLeftP = document.querySelector("#character-limit-info");
// charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;

// function updateCharacterLimit() {
//   const remainingCharacters = textarea.maxLength - textarea.value.length;
//   const charactersLeftP = document.querySelector("#character-limit-info");
//   charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;
// }

// textarea.addEventListener("keyup", updateCharacterLimit);

// refactor version 
const textarea = document.querySelector("textarea");

updateCharacterLimit();

function updateCharacterLimit() {
  const remainingCharacters = textarea.maxLength - textarea.value.length;
  const charactersLeftP = document.querySelector("#character-limit-info");
  charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;
}

textarea.addEventListener("keyup", updateCharacterLimit);