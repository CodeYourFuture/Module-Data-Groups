//Given an textarea and a character limit of 200
//When a user has already typed 200 characters into the textarea
//Then the interface should update with how many characters they've got left

//steps?

//1. Define the character limit of 200
//2. Access the textarea in the DOM
//3. When an event occurs, we have to calculate the number of the characters left.
//4. update the text with the actual characters left.

const characterLimit = 200;
const textArea = document.querySelector("#comment-input");
//console.log(textArea, "<------- textArea");
// keyup event is fired when a key is released
// react to this event!
//console.log(textArea.value);   //returned null, we need to addEventListener to the object textArea and two argument inside the brackets.

//function updateCharacterLimit() {

textArea.addEventListener("keyup", function updateCharacterLimit() {
  //keyup is the type of event
  // the second argument is the function we want to execute.
  //when the keyup takes a place with the user's interaction, the function will be executed every single time.
  //console.log("keyup event is firing...");
  //});
  // console.log(textArea.value.length, "textArea value");
  //console.log(characterLimit, "characterLimit");
  //});
  const charactersLeft = characterLimit - textArea.value.length;
  //console.log(charactersLeft, "<------ charactersLeft ");
  //});
  const charLimitInfo = document.querySelector("#character-limit-info");
  //charLimitInfo.innerText = charactersLeft;
  charLimitInfo.innerText = `You have ${charactersLeft} characters remaining`;
});

//textArea.addEventListener("keyup", function updateCharacterLimit);
