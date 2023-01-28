const inputEle = document.getElementById("input");
const addtodoBtn = document.getElementById("addTodo");
const todoRenderer = document.getElementById("todos");
let allTodo = [];

const isTodo = localStorage.getItem("todo");

const renderElements = () => {
  let elements = "";
  allTodo.map((data) => {
    elements += `<div class="todo-div">
      <p class="${data.marked ? "marked" : ""}">${data.value}</p>
     <div>
      <button onclick="markitems(${data.id})">mark</button>
      <button onclick="deleteItem(${data.id})">delete</button></div>
    </div>`;
    return null;
  });
  todoRenderer.innerHTML = elements;
  localStorage.setItem("todo", JSON.stringify(allTodo));
};

if (isTodo) {
  allTodo = JSON.parse(localStorage.getItem("todo"));
  renderElements();
}

addtodoBtn.addEventListener("click", () => {
  allTodo.push({
    id: allTodo.length + 1,
    value: inputEle.value,
    marked: false,
  });
  inputEle.value = "";
  renderElements();
});

const deleteItem = (id) => {
  allTodo = allTodo.filter((f) => f.id !== id);
  renderElements();
};

const markitems = (id) => {
  const newarry = [];
  allTodo.map((t) =>
    t.id === id
      ? newarry.push({
          ...t,
          marked: true,
        })
      : newarry.push(t)
  );
  allTodo = newarry;
  renderElements();
};
