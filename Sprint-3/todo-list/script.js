function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  let body = document.querySelector("body");
  let index = 0;

  let todoButtons = `<span class="badge bg-primary rounded-pill">
                     <i class="fa-solid fa-check" aria-hidden="true"></i>
                     <i class="fa fa-trash" aria-hidden="true"></i>
                     </span>`;

  todos.forEach(todoItem => {

    let listItem = document.createElement("li");
    let breakLine = document.createElement("br");
    let span = document.createElement("span");
    span.id = index;
    listItem.id = index;
    index++;
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
    list.appendChild(listItem);
    list.appendChild(span);
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

    console.log(`Added new Todo - Task:${todo.task}: Status:${todo.completed}`)
  }
  else {
    alert("Please input a new todo item!!");
  }

  populateTodoList([todo]);
}

//need to target form when the button is clicked

let form = document.querySelector("form");
form.addEventListener("submit", addNewTodo);
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
