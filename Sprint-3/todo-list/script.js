
const userInput = document.querySelector('.toDoInput')
const addToDobtn = document.querySelector('.addTask')
const todoList = document.querySelector('.todoList')
const isDone = document.getElementById('isDone')


let todo_collection = []  //empty array to append our todo lists as an object

function getTodo() {
    
    if (userInput.value && isDone) {
        let taskLi = userInput.value
        const taskObject = {  // creating an object of todo lists
            nameOfTask: taskLi,
            isCompleted: isDone.checked
        }
        todo_collection.push(taskObject)
        isDone.checked = false

        displayTask()
    }
    
    else {
        alert('Please enter both task and status.');
    }

}

function displayTask() {

    todoList.innerHTML = '';

    todo_collection.forEach(task =>{
        let taskLi = document.createElement("li") // creating a li element
        let completedBtn = document.createElement('button')
        completedBtn.textContent = 'completed'

        let eraseBtn = document.createElement('button')
        eraseBtn.textContent = "erase"

        taskLi.textContent = `${task.nameOfTask} - ${task.isCompleted ? 'Completed' : 'Pending'}`;
        todoList.appendChild(taskLi)

        taskLi.appendChild(completedBtn)
        taskLi.appendChild(eraseBtn)

        completedBtn.addEventListener('click', function(){
            taskLi.style.textDecoration = "line-through";
        })
        eraseBtn.addEventListener('click', function(){
            todoList.removeChild(taskLi);
        })

    })
    userInput.value = "";
}


function eraseTask() {
    todo_collection = []
    displayTask()
}
