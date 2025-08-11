let todos = [];

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  //clear old items
  list.innerHTML = "";

  //loop through array and display tasks to user
  todos.forEach((todoObject) => {
    //create new li
    const li = document.createElement("li");

    //create checkox toggle
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todoObject.completed;

    // clicked, toggle competed or not completed
    checkbox.addEventListener("change", () => {
      todoObject.completed = checkbox.checked;
      //refresh
      populateTodoList(todos);
    });

    //add task to li
    li.innerHTML = `${todoObject.task}`;
    li.appendChild(checkbox);

    //when user marks task as completed, add line through
    if (todoObject.completed === true) {
      li.style.textDecoration = "line-through";
    }

    //append li element to list
    list.appendChild(li);
  });
}

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  //grab input from input field
  const input = document.getElementById("todo-input");

  //if input is empty do nothing
  if (input.value === "") {
    return;
  } else {
    //create new todo object
    const newTask = {
      task: input.value,
      completed: false,
    };
    //add new task to list
    todos.push(newTask);

    //refresh
    populateTodoList(todos);

    //clear user input after adding
    input.value = "";

    return newTask;
  }
}

//add event listener to button
document.getElementById("add").addEventListener("click", addNewTodo);

//ignore this part
// nope :) :)
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedTodos() {
// remove all completed todos fro the array
// filter and replace children
// }
