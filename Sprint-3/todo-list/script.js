function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  if (todos.length <= 0) {
    let createLi = document.createElement("li");

    createLi.innerHTML = "No Todos ";
    list.appendChild(createLi);
  } else {
    todos.map((todo, index) => {
      //display li
      let createLi = document.createElement("li");
      const taskSpan = document.createElement("span");
      taskSpan.innerHTML = todo.task;
      createLi.appendChild(taskSpan);
      list.appendChild(createLi);
      //end li
      if (todo.completed == true) {
        taskSpan.style.textDecoration = "line-through";
      }
      //add button in li
      let completeButton = document.createElement("button");
      let deleteButton = document.createElement("button");
      completeButton.textContent = todo.completed == true ? "✅" : "❌";
      deleteButton.innerText = "Delete";
      createLi.appendChild(completeButton);
      createLi.append(deleteButton);
      //button eventListener
      completeButton.addEventListener("click", () => {
        if (todos[index].completed) {
          todos[index].completed = false;
        } else {
          todos[index].completed = true;
        }
        // todos[index].completed = "true";
        console.log(`You click complete button${index}`);
        populateTodoList(todos);
      });
      deleteButton.addEventListener("click", () => {
        console.log(`you click delete button ${index}`);
        todos.splice(index, 1);
        populateTodoList(todos);
      });
      //end button in li
    });
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);
deleteAllCompletedTodos();
//add to do button listener
const addTodoButton = document.querySelector("button[type='submit']");
addTodoButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("you click add to do button");
  addNewTodo(event);
});

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  const addValue = document.querySelector("input[type='text']");
  if (addValue.value == "") {
    alert("Please add todoList");
  } else {
    // alert(addValue.value);
    const newAddObj = { task: addValue.value, completed: false };
    todos.push(newAddObj);
    populateTodoList(todos);
    addValue.value = "";
  }
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  //remove all button listener
  const deleteAllButton = document.getElementById("remove-all-completed");
  deleteAllButton.addEventListener("click", () => {
    console.log("you click delete all button");
  });
}
