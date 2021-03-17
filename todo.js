const toDoInput = document.querySelector(".toDoInput")
const toDoInputClick = document.querySelector(".toDoInputClick")
const toDoMainList = document.querySelector(".toDoMainList")
const toDoMainFinishList = document.querySelector(".toDoMainFinishList")

const toDoLS = "todo";
const finishLS = "finish";

let toDos = [];
let finished = [];

function toDo(event) {
  event.preventDefault;
  const btn = event.target;
  const li = btn.parentNode;
  const text = li.querySelector("span").innerText;
  paintToDo(text);
  deleteFinish(event);
}

function deleteFinish(event) {
  event.preventDefault;
  const btn = event.target;
  const li = btn.parentNode;
  toDoMainFinishList.removeChild(li);
  const newFinish = finished.filter(function (finished) {
    return finished.id !== parseInt(li.id);
  });
  finished = newFinish;
  saveFinish();
}

function saveFinish() {
  localStorage.setItem(finishLS, JSON.stringify(finished));
}

function paintFinish(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.className = "deleteBtn"
  delBtn.classList.add("Btn")
  const backBtn = document.createElement("button");
  backBtn.className = "finishBtn"
  backBtn.classList.add("Btn")
  const span = document.createElement("span");
  let newID = 0;
  if (finished.length == 0) {
    newID = 1;
  } else {
    const finishLi = JSON.parse(localStorage.getItem(finishLS));
    newID = finishLi[finishLi.length - 1].id + 1;
  }
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteFinish);
  backBtn.innerText = "⏪";
  backBtn.addEventListener("click", toDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(backBtn);
  li.id = newID;
  toDoMainFinishList.appendChild(li);
  const finishObj = {
    text: text,
    id: newID
  };
  finished.push(finishObj);
  saveFinish();
}

function finish(event) {
  event.preventDefault;
  const btn = event.target;
  const li = btn.parentNode;
  const text = li.querySelector("span").innerText;
  paintFinish(text);
  deleteToDo(event);
}

function deleteToDo(event) {
  event.preventDefault;
  const btn = event.target;
  const li = btn.parentNode;
  toDoMainList.removeChild(li);
  const newToDo = toDos.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });
  toDos = newToDo;
  saveToDo();
}

function saveToDo() {
  localStorage.setItem(toDoLS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.className = "deleteBtn"
  delBtn.classList.add("Btn")
  const finBtn = document.createElement("button");
  finBtn.className = "finishBtn"
  finBtn.classList.add("Btn")
  const span = document.createElement("span");
  let newID = 0;
  if (toDos.length == 0) {
    newID = 1;
  } else {
    const toDoLi = JSON.parse(localStorage.getItem(toDoLS));
    newID = toDoLi[toDoLi.length - 1].id + 1;
  }
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  finBtn.innerText = "✅";
  finBtn.addEventListener("click", finish);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  li.id = newID;
  toDoMainList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newID
  };
  toDos.push(toDoObj);
  saveToDo();
}

function loadFinish() {
  const finished = localStorage.getItem(finishLS);
  if (finished != null) {
    const parsedFinished = JSON.parse(finished);
    parsedFinished.forEach(function (finished) {
      paintFinish(finished.text);
    });
  }
}

function loadToDo() {
  const toDo = localStorage.getItem(toDoLS);
  if (toDo !== null) {
    const parsedToDos = JSON.parse(toDo);
    parsedToDos.forEach(function (todo) {
      paintToDo(todo.text);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const toDoValue = toDoInput.value;
  paintToDo(toDoValue);
  toDoInput.value = "";
}

function handleEnter(event) {
  if(event.keyCode == 13) {
    handleSubmit(event)
  }
}

function init() {
  loadToDo();
  loadFinish();
  toDoInput.addEventListener("keydown",handleEnter)
  toDoInputClick.addEventListener("click",handleSubmit)
}

init();