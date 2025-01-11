function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  let body = document.querySelector("body");

  list.innerHTML = "";

  let todoButtonsIndex = 0;

  let todoButtons = `<span class="badge bg-primary rounded-pill">
                     <i class="fa-solid fa-check" aria-hidden="true"></i>
                     <i class="fa fa-trash" aria-hidden="true"></i>
                     </span>`;

  todos.forEach((todoItem, index) => {

    let listItem = document.createElement("li");
    listItem.id = index;

    let breakLine = document.createElement("br");
    let span = document.createElement("span");


    span.innerHTML = todoButtons;
    listItem.style.background = "lightblue";
    listItem.style.padding = "1em";
    listItem.style.display = "inline-block";
    listItem.style.margin = "0.5em";
    listItem.textContent = todoItem.task;
    list.style.margin = "0 auto";
    list.style.backgroundColor = "#FCC4AB";
    body.style.textAlign = "center"

    list.appendChild(breakLine);

    if (todoItem.completed === true) {
      listItem.style.textDecoration = "line-through";
    }
    listItem.appendChild(span);
    list.appendChild(listItem);
    //target the span instead of targetin the document, to make it more precise
    const checkMark = span.querySelector(".fa-check");
    const deleteButton = span.querySelector(".fa-trash");

    checkMark.id = todoButtonsIndex;
    deleteButton.id = todoButtonsIndex;
    todoButtonsIndex++;

    //when the checkmark or trash buttons are clicked
    //make span be inside the listItem element and target the nearest listItem


    checkMark.addEventListener("click", function () {

      const listItem = this.closest("li");
      const todoID = listItem.id;

      if (todoID && todos[parseInt(todoID)].completed === false) {
        todos[parseInt(todoID)].completed = true;
        listItem.style.textDecoration = "line-through";

      }
      else {
        todos[parseInt(todoID)].completed = false;
        listItem.style.textDecoration = "none";
      }

    })


    deleteButton.addEventListener("click", function () {
      const listItem = this.closest("li");
      const todoID = listItem.id;

      if (todoID) {
        todos.splice(parseInt(todoID), 1);
        listItem.remove();
        populateTodoList(todos);

      }


    })


  });
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

  let inputField = document.getElementById("todo-input");
  let inputFieldValue = inputField.value;
  let completedStatus = false;

  let todo = {};

  if (inputFieldValue.length > 0) {
    todo["task"] = inputFieldValue
    todo["completed"] = completedStatus;
    todos.push(todo);

    console.log(`Added new Todo - Task:${todo.task}: Status:${todo.completed}`);
    populateTodoList(todos);
  }
  else {
    alert("Please input a new todo item!!");
  }



}


//need to target form when the button is clicked

let form = document.querySelector("form");
form.addEventListener("submit", addNewTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
