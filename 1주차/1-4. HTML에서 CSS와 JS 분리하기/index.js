const p1 = document.querySelector("#산책시키기");
const p2 = document.querySelector("#치킨먹기");
const p3 = document.querySelector("#휴식");

p1.addEventListener("click", (e) => {
  checkTodolist(e);
});
p2.addEventListener("click", (e) => {
  checkTodolist(e);
});
p3.addEventListener("click", (e) => {
  checkTodolist(e);
});

const checkTodolist = (e) => {
  if (e.target.className === "done") {
    e.target.className = "";
  } else {
    e.target.className = "done";
  }
};
