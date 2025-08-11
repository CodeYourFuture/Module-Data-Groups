// Given an textarea and a character limit of 200
// When a user types characters into the textarea
// // Then the interface should update with how many characters they’ve got left.

//Steps
// 1. Set a character limit ot the text area
// 2. Access the textarea in the DOM
// 3. When an event occurs, we compare characterLimit with the current length of the text area, 
//4. We must calculate the characters left
//.5 Update the text with the actual characters left


const characterLimit =200;
const textArea = document.querySelector('#comment-input');



//Keyup event is fired when a key is released 
//React to this event!

//Run some code, whenever the keyup event takes place?
textArea.addEventListener('keyup', function updateCharacterLimit(event) {
    const characterLeft = characterLimit - textArea.value.length;
    const characterLimitInfo = document.querySelector('#character-limit-info');

    characterLimitInfo.innerText = ` You have ${characterLeft} characters remaining `;
});

//We could also create the event function outside of the event listener
// function updateCharacterLimit(event) {
//     const characterLeft = characterLimit - textArea.value.length;
//     const charLimitInfo = document.querySelector('#character-limit-info');

//     characterLimitInfo.innerText = ` You have ${characterLeft} characters remaining `;
// }

// textArea.addEventListener('keyup',updateCharacterLimit);

// Notice if we build the function outside of the event listener, we can call it directly from the event listener and we don't use parenthesis anymore