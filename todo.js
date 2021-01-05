const toDoInput = document.querySelector(".toDoInput")
const toDoMainList = document.querySelector(".toDoMainList")

const toDoLS = "todo"
const finishLS = "finish"

let toDos = []
let finishs = []

function saveToDos() {
  localStorage.setItem(toDoLS,JSON.stringify(toDos))
}

function paintToDo(text) {
  const li = document.createElement("li")
  const span = document.createElement("span")
  const delBtn = document.createElement("button")
  delBtn.className = "deleteBtn"
  const finBtn = document.createElement("button")
  finBtn.className = "finishBtn"
  delBtn.innerText = "❌"
  finBtn.innerText = "✅"
  delBtn.addEventListener("click",deleteToDo)
  finBtn.addEventListener("click",finishToDo)
  let liID = 0
  if(toDos.length == 0){
    liID = 1
  }
  else {
    const LSToDoList = JSON.parse(localStorage.getItem(toDoLS))
    liID = LSToDoList[-1].id + 1
  }
  span.innerText = text
  li.appendChild(span)
  li.appendChild(delBtn)
  li.appendChild(finBtn)
  li.id = liID
  toDoMainList.appendChild(li)
  let toDoObj = {
    text: text,
    id: liID
  }
  toDos.push(toDoObj)
  saveToDos()
}

function handlesubmit(event) {
  if(event.keyCode == 13) {
    const toDoThing = toDoInput.value
    paintToDo(toDoThing)
    toDoInput.value = ""
  }
}

function loadToDo() {
  const toDo = localStorage.getItem(toDoLS)
  if(toDo !== null) {
    let toDoList = JSON.parse(toDo)
    toDoList.forEach(todo => {
      paintToDo(todo.text)
    })
  }
}

function init() {
  loadToDo()
  toDoInput.addEventListener("keydown",handlesubmit)
}

init()