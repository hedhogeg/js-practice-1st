const toDoInput = document.querySelector(".toDoInput")
const toDoInputClick = document.querySelector(".toDoInputClick")
const toDoMainList = document.querySelector(".toDoMainList")
const toDoMainFinishList = document.querySelector(".toDoMainFinishList")

const toDoLS = "todo"
const finishLS = "finish"

let toDos = []
let finishes = []

function saveFinish() {
  localStorage.setItem(finishLS,JSON.stringify(finishes))
}

function finishToDo(event) {
  const finishBtn = event.target
  const finishThing = finishBtn.parentNode
  const finishOne = toDos.filter(todo => todo.id == parseInt(finishThing.id))
  paintFinish(finishOne[0].text)
  deleteToDo(event)
}

function deleteToDo(event) {
  const wannaDel = event.target
  const deleteThing = wannaDel.parentNode
  const newToDos = toDos.filter(todo => todo.id !== parseInt(deleteThing.id))
  toDoMainList.removeChild(deleteThing)
  toDos = newToDos
  saveToDo()
}

function deleteFinish(event) {
  const wannaDelFin = event.target
  const deleteFinThing = wannaDelFin.parentNode
  const newFinishes = finishes.filter(finish => finish.id !== parseInt(deleteFinThing.id))
  toDoMainFinishList.removeChild(deleteFinThing)
  finishes = newFinishes
  saveFinish()
}

function saveToDo() {
  localStorage.setItem(toDoLS,JSON.stringify(toDos))
}

function paintToDo(text) {
  const li = document.createElement("li")
  const span = document.createElement("span")
  const delBtn = document.createElement("button")
  delBtn.className = "deleteBtn"
  delBtn.classList.add("Btn")
  const finBtn = document.createElement("button")
  finBtn.className = "finishBtn"
  finBtn.classList.add("Btn")
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
    liID = LSToDoList[LSToDoList.length - 1].id + 1
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
  saveToDo()
}

function paintFinish(text) {
  const li = document.createElement("li")
  const span = document.createElement("span")
  const delBtn = document.createElement("button")
  delBtn.className = "deleteFinBtn"
  delBtn.classList.add("Btn")
  delBtn.innerText = "❌"
  delBtn.addEventListener("click",deleteFinish)
  let liID = 0
  if(finishes.length == 0){
    liID = 1
  }
  else {
    const LSFinishList = JSON.parse(localStorage.getItem(finishLS))
    liID = LSFinishList[LSFinishList.length - 1].id + 1
  }
  span.innerText = text
  li.appendChild(span)
  li.appendChild(delBtn)
  li.id = liID
  toDoMainFinishList.appendChild(li)
  let finishObj = {
    text: text,
    id: liID
  }
  finishes.push(finishObj)
  saveFinish()
}

function handleSubmit() {
  const toDoThing = toDoInput.value
  paintToDo(toDoThing)
  toDoInput.value = ""
}

function handleEnter(event) {
  if(event.keyCode == 13) {
    handleSubmit()
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

function loadFinish() {
  const Finish = localStorage.getItem(finishLS)
  if(Finish !== null) {
    let FinishList = JSON.parse(Finish)
    FinishList.forEach(finish => {
      paintFinish(finish.text)
    })
  }
}

function init() {
  loadToDo()
  loadFinish()
  toDoInput.addEventListener("keydown",handleEnter)
  toDoInputClick.addEventListener("click",handleSubmit)
}

init()