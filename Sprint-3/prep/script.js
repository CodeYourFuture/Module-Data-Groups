/* jest-ignore-file */
//Given an textarea and a character limit of 200
//When a user types characters into the textarea
//Then the interface should update with how many characters they’ve got left.

//steps
//Define characterLimit
//Access textarea in the Dom
//when event occurs
//we compare characterLimit with the number of characters in the input

const characterLimit = 200
const textArea = document.querySelector("#comment-input")


textArea.addEventListener('keyup', function updateCharacterLimit(){
    //console.log(textArea.value, "<----");
    const characterLeft = characterLimit - textArea.value.length;
    const charLimitInfo = document.querySelector("#character-limit-info")
    charLimitInfo.innerText = `You have ${characterLeft} characters remaining`;
})

function printMessage(name) {
  console.log(`My name is ${name}`);
}

setTimeout(printMessage, 5000, "Sally"); // <-- Call printMessage after at least 3000ms, with the argument "Sally"
printMessage("Daniel");