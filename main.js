// ? Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

// ? Evant Listeners
todoButton.addEventListener("click", addTodo);

// ? Functions

function addTodo(event) {
// ? Prevant Form from submiting
event.preventDefault();
// ? TODO DIV
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
// ? Create LI
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);   
// ? Cheak Mark Button
const completedButton = document.createElement("button");
completedButton.innerHTML = "<i class='fas fa-check'></i>";
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
// ? trash Mark Button
const trashButton = document.createElement("button");
trashButton.innerHTML = "<i class='fas fa-trash'></i>";
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
// ? append it to todolist
todoList.appendChild(todoDiv);
// ? Clear ToDo input Value
todoInput.value = "";
}