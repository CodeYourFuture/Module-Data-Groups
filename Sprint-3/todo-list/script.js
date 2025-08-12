// Write your code here...
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  list.innerHTML = ""; // clears the available list
  if (todos.length === 0) {
    list.innerHTML = `<li class="empty-state">No todos yet. Add one above!</li>`;
    return;
  }
  todos.forEach((todo, index) => {
    // create the todo elements
    const listItem = document.createElement("li"); // create list item
    listItem.className = "todo-item" + (todo.completed ? " completed" : "");

    let todoText = document.createElement("span");
    todoText.className = "todo.text" + (todo.completed ? " completed" : "");
    todoText.textContent = todo.task;

    let completeButton = document.createElement("button"); // create complete button
    completeButton.className = todo.completed
      ? "complete-btn completed"
      : "complete-btn";
    completeButton.textContent = todo.completed ? "Undo" : "Complete";
    completeButton.onclick = () => toggleComplete(index);

    let deleteButton = document.createElement("button"); // create delete button
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodo(index);

    listItem.appendChild(todoText); // append elements to list item
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem); // append list item to todo list
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function toggleComplete(index) {
  // function to toggle complete status
  todos[index].completed = !todos[index].completed;
  populateTodoList(todos);
}

function deleteTodo(index) {
  //function to delete specific todo
  todos.splice(index, 1);
  populateTodoList(todos);
}

populateTodoList(todos); // initial population

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

  let input = document.getElementById("new-todo-input");

  let todoText = input.value.trim();

  if (todoText === "") {
    alert("Please enter a todo item!");
    return;
  }
  let newTodo = {
    // create new todo object
    task: todoText,
    completed: false,
  };

  todos.push(newTodo); // ad todos array

  input.value = ""; //clear input field

  populateTodoList(todos); //refresh the todo list
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed); // filter out the completed todos

  populateTodoList(todos); // refresh the display

  console.log("The completed todos are deleted!");
}
// Event listener
document.addEventListener("DOMContentLoaded", function () {
  // Try to find the form by different selectors
  let form =
    document.querySelector("form") ||
    document.querySelector(".add-todo-form") ||
    document.getElementById("todo-form");

  if (form) {
    form.addEventListener("submit", addNewTodo);
  } else {
    console.log(
      "No form found. Make sure your HTML has a form element or call addNewTodo() directly from a button onclick."
    );

    // Try to find an add button and attach the event
    let addButton =
      document.querySelector('button[type="submit"]') ||
      document.querySelector(".add-btn") ||
      document.getElementById("add-todo-btn");

    if (addButton) {
      addButton.addEventListener("click", addNewTodo);
    }
  }

  // Try to find delete all completed button
  let deleteAllBtn =
    document.querySelector(".delete-all-btn") ||
    document.getElementById("delete-all-btn");

  if (deleteAllBtn) {
    deleteAllBtn.addEventListener("click", deleteAllCompletedTodos);
  }
});
