function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = ""; // Clear existing list

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((todo, index) => {
      let listItem = document.createElement("li");
      listItem.textContent = todo.task;

      let badge = document.createElement("span");
      badge.className = "badge bg-primary rounded-pill";

      let tickIcon = document.createElement("i");
      tickIcon.className = "fa fa-check";
      tickIcon.addEventListener("click", () => {
          listItem.style.textDecoration = listItem.style.textDecoration === "line-through" ? "" : "line-through";
      });

      let trashIcon = document.createElement("i");
      trashIcon.className = "fa fa-trash";
      trashIcon.addEventListener("click", () => {
          list.removeChild(listItem);
      });

      badge.appendChild(tickIcon);
      badge.appendChild(trashIcon);
      listItem.appendChild(badge);
      list.appendChild(listItem);
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
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let input = document.querySelector("input[type='text']");
  let task = input.value.trim();

  if (task) {
      todos.push({ task: task, completed: false });
      populateTodoList(todos);
      input.value = "";
  }
}

document.querySelector("form").addEventListener("submit", addNewTodo);

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  todos = todos.filter(todo => {
      let listItem = document.querySelector(`li:nth-child(${todos.indexOf(todo) + 1})`);
      return listItem.style.textDecoration !== "line-through";
  });
  populateTodoList(todos);
}

document.getElementById("remove-all-completed").addEventListener("click", deleteAllCompletedTodos);