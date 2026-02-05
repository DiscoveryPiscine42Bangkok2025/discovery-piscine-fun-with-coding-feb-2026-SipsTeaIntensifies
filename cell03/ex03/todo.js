const list = document.getElementById("ft_list");
const button = document.getElementById("newBtn");

button.addEventListener("click", createTodo);

function createTodo() {
  const text = prompt("Enter a new TO DO:");
  if (!text || text.trim() === "") return;

  addTodo(text.trim());
  saveTodos();
}

function addTodo(text) {
  const div = document.createElement("div");
  div.className = "todo";
  div.textContent = text;

  div.addEventListener("click", function () {
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

  document.cookie =
    "todos=" +
    encodeURIComponent(JSON.stringify(todos)) +
    "; path=/; max-age=31536000";
}

function loadTodos() {
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    if (cookie.startsWith("todos=")) {
      const data = JSON.parse(
        decodeURIComponent(cookie.split("=")[1])
      );
      data.forEach(text => addTodo(text));
      break;
    }
  }
}

loadTodos();
