const input = document.querySelector("#입력값");
const button = document.querySelector("#추가버튼");
const todos = document.querySelector("#할일들");

button.addEventListener("click", () => {
  const value = input.value;
  const p = document.createElement("p");
  p.innerText = value;
  p.classList.add("todo");

  todos.appendChild(p);
  input.value = "";

  p.addEventListener("click", () => {
    if (!p.classList.contains("done")) {
      p.classList.add("done");
    } else {
      p.classList.remove("done");
    }
  });
});
