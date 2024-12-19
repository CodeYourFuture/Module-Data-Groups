/*function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}*/

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

  if (inputBox.value === '') {
    alert("You must write something!"); //checking if input is empty
  }

  else{
    let li= document.createElement("li"); //create and store variable in "li"
    li.innerHTML = inputBox.value; // text inside the li add into the li
    listContainer.appendChild(li); //diplasy the li in the list container
    
    let span = document.createElement("span");
   span.innerHTML= "\u00d7" //add icon X do delete
   li.appendChild(span); //display the X
  }
  inputBox.value= ''; //clear the input field 
  saveData(); //evertime add taks save data in the browser 

}

listContainer.addEventListener("click", function(e){
 if (e.target.tagName === "LI"){ //if have clicked li if check class name there checked line on the text 
  e.target.classList.toggle("checked");
  saveData();

 }
 else if(e.target.tagName === "SPAN"){ //if click on the spam it is remove 
  e.target.parentElement.remove();
  saveData();
 }

}, false);

// store the task in the broser:

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML) // storage the list data
}

function showTask() {
  const savedData = localStorage.getItem("data");
  if (savedData) {
    listContainer.innerHTML = savedData;
  }
}

showTask();


