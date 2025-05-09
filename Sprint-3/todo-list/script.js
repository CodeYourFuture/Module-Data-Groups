function populateTodoList(todos) {
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
}

document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.querySelector("#todo-list");
  const completedList = document.querySelector("#completed-list");
  const form = document.querySelector("#todo-form");
  const input = document.querySelector("#todoInput");
  const deadlineInput = document.querySelector("#todoDeadline");
  const removeAllCompletedBtn = document.querySelector("#remove-all-completed");

  const completedForm = document.querySelector("#completed-form");
  const completedInput = document.querySelector("#completedInput");
  const removeAllCompletedTasksBtn = document.querySelector(
    "#remove-all-completed-tasks"
  );

  const todos = [];
  const completedTasks = [];

  // Function to calculate and display the countdown
  const getDeadlineCountdown = (deadline) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const timeDiff = deadlineDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
  };

  // Function to create and display todos
  const populateTodoList = () => {
    todoList.innerHTML = ""; // Clear the current list
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.classList.toggle("completed", todo.completed);
      li.innerHTML = `${todo.task} - <span class="badge bg-primary rounded-pill">
          <i class="fa fa-check" aria-hidden="true"></i>
          <i class="fa fa-trash" aria-hidden="true"></i>
        </span>`;

      // Add event listener for check icon (to toggle strike-through)
      li.querySelector(".fa-check").addEventListener("click", () => {
        todo.completed = !todo.completed;
        li.classList.toggle("completed", todo.completed);
        if (todo.completed) {
          completedTasks.push(todo); // Add to completed tasks
          todos.splice(index, 1); // Remove from todos list
          populateTodoList(); // Re-render the todo list
          populateCompletedList(); // Re-render the completed list
        }
      });

      // Add event listener for delete icon
      li.querySelector(".fa-trash").addEventListener("click", () => {
        todos.splice(index, 1);
        populateTodoList(); // Re-render the list after deletion
      });

      // Add the deadline countdown if present
      if (todo.deadline) {
        const daysLeft = getDeadlineCountdown(todo.deadline);
        li.innerHTML += ` <span class="deadline">Deadline: ${daysLeft} day(s) left</span>`;
      }

      todoList.appendChild(li);
    });
  };

  // Function to populate completed tasks list
  const populateCompletedList = () => {
    completedList.innerHTML = ""; // Clear the current list
    completedTasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${task.task} - <span class="badge bg-primary rounded-pill">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </span>`;

      // Add event listener for delete icon in completed tasks
      li.querySelector(".fa-trash").addEventListener("click", () => {
        completedTasks.splice(index, 1);
        populateCompletedList(); // Re-render the completed tasks list
      });

      completedList.appendChild(li);
    });
  };

  // Add a new todo to the list
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoText = input.value.trim();
    const deadline = deadlineInput.value;

    if (todoText === "") return; // Prevent adding empty todos

    const newTodo = {
      task: todoText,
      completed: false,
      deadline: deadline || null
    };

    todos.push(newTodo);
    input.value = ""; // Clear the input field
    deadlineInput.value = ""; // Clear the date input
    populateTodoList(); // Re-render the todo list
  });

  // Remove all completed tasks from todos
  removeAllCompletedBtn.addEventListener("click", () => {
    const completedTodos = todos.filter(todo => todo.completed);
    completedTodos.forEach(todo => {
      const index = todos.indexOf(todo);
      todos.splice(index, 1);
    });
    populateTodoList(); // Re-render the list after deletion
  });

  // Add a completed task to the completed list
  completedForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const completedText = completedInput.value.trim();

    if (completedText === "") return; // Prevent adding empty tasks

    const newCompletedTask = {
      task: completedText
    };

    completedTasks.push(newCompletedTask);
    completedInput.value = ""; // Clear the input field
    populateCompletedList(); // Re-render the completed tasks list
  });

  // Remove all completed tasks
  removeAllCompletedTasksBtn.addEventListener("click", () => {
    completedTasks.length = 0; // Clear the completed tasks array
    populateCompletedList(); // Re-render the completed tasks list
  });

  // Initial population of todo list
  populateTodoList();
});
