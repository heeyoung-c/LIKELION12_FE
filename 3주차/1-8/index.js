const input = document.querySelector("#입력창");
const button = document.querySelector("#추가버튼");
const todos = document.querySelector("#할일들");
const reset = document.querySelector("#초기화");
const newTodos = [];

button.addEventListener("click", () => {
  const value = input.value;
  const newTodo = document.createElement("p");
  newTodo.innerText = value;
  newTodo.classList.add("todo");

  newTodos.push(newTodo);
  todos.appendChild(newTodo);
  input.value = "";

  newTodo.addEventListener("click", () => {
    if (!newTodo.classList.contains("done")) {
      newTodo.classList.add("done");
    } else {
      newTodo.classList.remove("done");
    }
  });
});

reset.addEventListener("click", () => {
  newTodos.forEach((newTodo) => {
    todos.removeChild(newTodo);
  });
});
