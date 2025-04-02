let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
let list = document.getElementById("todo-list");
const newToDo = document.querySelector("#new-todo-text");
const submitNewTodo = document.querySelector("#submit-new-todo");
const removeAllTodo = document.querySelector("#remove-all-completed");

function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = "";
  for (let item of todos) {
    const taskToDo = document.createElement("li");
    taskToDo.innerText = item["task"];

    const badge = document.createElement("span");
    const completedBadge = document.createElement("i");
    const deleteBadge = document.createElement("i");
    badge.className = "badge bg-primary rounded-pill";
    completedBadge.className = "fa fa-check";
    completedBadge.setAttribute("aria-hidden", "true");
    completedBadge.innerText = "Completed";
    completedBadge.addEventListener("click", function () {
      taskToDo.style.textDecoration =
        taskToDo.style.textDecoration === "line-through"
          ? "none"
          : "line-through";
      item.completed = !item.completed;
    });
    deleteBadge.className = "fa fa-trash";
    deleteBadge.innerText = "Delete";
    deleteBadge.setAttribute("aria-hidden", "true");
    deleteBadge.addEventListener("click", function () {
      if (item.completed) {
        todos.splice(todos.indexOf(item), 1);
        list.removeChild(taskToDo);
      } else {
        alert("Please complete the task first");
      }
    });
    badge.appendChild(completedBadge);
    badge.appendChild(deleteBadge);
    taskToDo.appendChild(badge);
    list.appendChild(taskToDo);
  }
}
// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  if (newToDo.value.trim() !== "") {
    todos.push({ task: newToDo.value, completed: false });
    populateTodoList(todos);
    newToDo.value = "";
  } else {
    alert("Please Enter a task");
  }
}
// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].completed) {
      todos.splice(i, 1);
    }
  }
  populateTodoList(todos);
}

function crossingCompletedTask() {}

populateTodoList(todos);
submitNewTodo.addEventListener("click", addNewTodo);
removeAllTodo.addEventListener("click", deleteAllCompletedTodos);
