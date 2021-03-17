const btn = document.querySelector(".saveLoadBtn")

let memo = ""
const memoLS = "memo"
let writeStatus = true


function handleClick() {
  if(writeStatus) {
    btn.innerText = "Save"
    const showMemo = document.querySelector(".showMemo")
    const memoCont = showMemo.parentNode
    showMemo.remove()
    const textarea = document.createElement("textarea")
    textarea.className = "writeMemo"
    textarea.value = memo
    memoCont.appendChild(textarea)
    writeStatus = false
  }
  else {
    btn.innerText = "Write"
    const writeMemo = document.querySelector(".writeMemo")
    const memoCont = writeMemo.parentNode
    const currentMemo = writeMemo.value
    writeMemo.remove()
    const memoDiv = document.createElement("div")
    memoDiv.className = "showMemo"
    memoCont.appendChild(memoDiv)
    show(currentMemo)
    writeStatus = true
  }
}

function saveMemo() {
  localStorage.setItem(memoLS, memo)
}

function show(text) {
  const showMemo = document.querySelector(".showMemo")
  showMemo.innerText = text
  memo = text
  saveMemo()
}

function loadMemo() {
  const nowMemo = localStorage.getItem(memoLS)
  show(nowMemo)
}

function init() {
  loadMemo()
  btn.addEventListener("click", handleClick)
}

init()
