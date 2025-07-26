function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const taskText = document.createTextNode(todo.task);
    li.appendChild(taskText);
    
    if (todo.completed) {
      li.style.textDecoration = "line-through"; // strike through
    }
    
    const iconContainer = document.createElement("div");

    // add tick
    const tickIcon = document.createElement("i");
    tickIcon.className = "fa fa-check";
    tickIcon.setAttribute("aria-hidden", "true");
    tickIcon.style.marginLeft = "10px";
    tickIcon.addEventListener("click", () => {
      todo.completed = !todo.completed; // the toggle
      li.style.textDecoration = todo.completed ? "line-through" : "none";
    });

    const binIcon = document.createElement("i");
    binIcon.className = "fa fa-trash";
    binIcon.setAttribute("aria-hidden", "true");
    binIcon.style.marginLeft = "10px";
    binIcon.addEventListener("click", () => {
      const index = todos.indexOf(todo);
      if (index > -1) {
        todos.splice(index, 1); // remove the todo from the array
        populateTodoList(todos);
      }
    });

    iconContainer.appendChild(tickIcon);
    iconContainer.appendChild(binIcon);
    li.appendChild(iconContainer);
    list.appendChild(li);
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
  const input = document.getElementById("todoInput");
  const task = input.value.trim();
  if (task !== "") {
    todos.push({ task, completed: false }); // new todo to array
    populateTodoList(todos); // render again
    input.value = ""; // resets input field
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  todos = todos.filter(todo => !todo.completed); // filter out completed todos
  populateTodoList(todos); // Refresh
}

  document.querySelector("form").addEventListener("submit", addNewTodo);
  document.getElementById("remove-all-completed").addEventListener("click", deleteAllCompletedTodos);