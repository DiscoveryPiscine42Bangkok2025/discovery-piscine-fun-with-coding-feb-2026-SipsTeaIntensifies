$(document).ready(function () {
  const list = $("#ft_list");
  const button = $("#newBtn");

  button.click(createTodo);

  function createTodo() {
    const text = prompt("Enter a new TO DO:");
    if (!text || text.trim() === "") return;

    addTodo(text);
    saveTodos();
  }

  function addTodo(text) {
    const div = $("<div></div>")
      .addClass("todo")
      .text(text);

    div.click(function () {
      const confirmDelete = confirm("Remove this TO DO?");
      if (confirmDelete) {
        $(this).remove();
        saveTodos();
      }
    });

    list.prepend(div);
  }

  function saveTodos() {
    const todos = [];

    $(".todo").each(function () {
      todos.push($(this).text());
    });

    document.cookie =
      "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
  }

  function loadTodos() {
    const cookie = document.cookie
      .split("; ")
      .find(row => row.startsWith("todos="));

    if (!cookie) return;

    const data = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
    data.forEach(text => addTodo(text));
  }

  loadTodos();
});
