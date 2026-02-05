const list = document.getElementById("ft_list");
const button = document.getElementById("newBtn");

button.addEventListener("click", createTodo);

function createTodo() {
  const text = prompt("Enter a new TO DO:");
  if (!text || text.trim() === "") return;

  addTodo(text);
  saveTodos();
}

function addTodo(text) {
  const div = document.createElement("div");
  div.className = "todo";
  div.textContent = text;

  div.addEventListener("click", () => {
    const confirmDelete = confirm("Remove this TO DO?");
    if (confirmDelete) {
      div.remove();
      saveTodos();
    }
  });

  list.prepend(div);
}

function saveTodos() {
  const todos = [];
  document.querySelectorAll(".todo").forEach(todo => {
    todos.push(todo.textContent);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const stored = localStorage.getItem("todos");
  if (!stored) return;

  const data = JSON.parse(stored);
  data.forEach(text => addTodo(text));
}

loadTodos();
