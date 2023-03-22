const todoList = document.getElementById("todoList");
const addButton = document.getElementById("addButton");
const input = document.getElementById("todoInput");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

for (const todo of todos) {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "deleteButton";
    listItem.textContent = todo;
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
}

function addTodo() {
    if (input.value.trim() !== "") {
        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.className = "deleteButton";
        listItem.textContent = input.value.trim();
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        todos.push(input.value.trim());
        localStorage.setItem("todos", JSON.stringify(todos));

        input.value = "";
    }
}

function deleteTodoItem(event) {
    if (event.target.classList.contains("deleteButton")) {
        const todoItem = event.target.parentNode;
        const index = Array.from(todoList.children).indexOf(todoItem);

        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));

        todoItem.remove();
    }
}

addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodoItem);
