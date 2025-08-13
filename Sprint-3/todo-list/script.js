function calculateDaysLeft(dateString) {
  const today = new Date();
  const deadline = new Date(dateString);
  today.setHours(0, 0, 0, 0);
  deadline.setHours(0, 0, 0, 0);

  const diffTime = deadline - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 1) return { text: `${diffDays} days left`, status: "normal" };
  if (diffDays === 1) return { text: "1 day left", status: "normal" };
  if (diffDays === 0) return { text: "Due today", status: "due-today" };
  return { text: "Overdue", status: "overdue" };
}

function createTodoElement(todoText, completed = false, deadline = "") {
  const li = document.createElement("li");
  li.innerText = todoText;
  if (completed) {
    li.style.textDecoration = "line-through";
  }

  // Show deadline countdown if provided
  if (deadline) {
    const countdownInfo = calculateDaysLeft(deadline);
    const countdown = document.createElement("small");
    countdown.style.display = "block";
    countdown.style.fontSize = "0.8em";

    if (countdownInfo.status === "overdue") {
      countdown.style.color = "red";
    } else if (countdownInfo.status === "due-today") {
      countdown.style.color = "orange";
    } else {
      countdown.style.color = "#555";
    }

    countdown.innerText = countdownInfo.text;
    li.appendChild(countdown);
  }

  const span = document.createElement("span");
  span.className = "badge bg-primary rounded-pill";

  const tickIcon = document.createElement("i");
  tickIcon.className = "fa fa-check";
  tickIcon.setAttribute("aria-hidden", "true");
  tickIcon.addEventListener("click", () => {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "";
    } else {
      li.style.textDecoration = "line-through";
    }
  });

  const binIcon = document.createElement("i");
  binIcon.className = "fa fa-trash";
  binIcon.setAttribute("aria-hidden", "true");
  binIcon.addEventListener("click", () => {
    li.remove();
  });

  span.appendChild(tickIcon);
  span.appendChild(binIcon);
  li.appendChild(span);

  return li;
}

function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach(todo => {
    const li = createTodoElement(todo.task, todo.completed, todo.deadline || "");
    list.appendChild(li);
  });
}

let todos = [
  { task: "Wash the dishes", completed: false, deadline: "" },
  { task: "Do the shopping", completed: false, deadline: "" },
];

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();
  const input = document.getElementById("todoInput");
  const dateInput = document.getElementById("todoDate");

  const value = input.value.trim();
  const deadline = dateInput.value;

  if (value) {
    const li = createTodoElement(value, false, deadline);
    document.getElementById("todo-list").appendChild(li);
  }

  input.value = "";
  dateInput.value = "";
}

function deleteAllCompletedTodos() {
  const list = document.getElementById("todo-list");
  const completedItems = list.querySelectorAll("li");
  completedItems.forEach(li => {
    if (li.style.textDecoration === "line-through") {
      li.remove();
    }
  });
}

// Event listeners
document.querySelector("form").addEventListener("submit", addNewTodo);
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);
