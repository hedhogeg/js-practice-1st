const calendarCont = document.querySelector(".calendarContainer")
const calendarBtn = document.querySelector(".calendarBtn")
const memoCont = document.querySelector(".memoContainer")
const memoBtn = document.querySelector(".memoBtn")
const timeBack = document.querySelector("#timeBack")

let calendarState = false
let memoState = false

function moveCalendar() {
    if(!calendarState) {
      calendarCont.style.top = 0
      timeBack.style.transition = `1s ease-in-out`
      timeBack.style.top = `80%`
      calendarBtn.innerText = "Close"
      calendarCont.style.boxShadow = `0 2px 0 10000px rgba(0,0,0,0.5)`
      calendarCont.style.backgroundColor = `rgba(0,0,0,0.5)`
      calendarState = true
    }
    else {
      calendarCont.style.top = `-72%`
      timeBack.style.top = `8%`
      calendarBtn.innerText = "calendar"
      calendarCont.style.boxShadow = `none`
      calendarCont.style.backgroundColor = `transparent`
      calendarState = false
    }
}

function moveMemo() {
    if(!memoState) {
      memoCont.style.bottom = 0
      timeBack.style.transition = `0.2s ease-out`
      timeBack.style.transitionDelay = `0.79s`
      timeBack.style.top = 0
      memoBtn.innerText = `Close`
      memoCont.style.boxShadow = `0 2px 0 10000px rgba(0,0,0,0.5)`
      memoCont.style.backgroundColor = `rgba(0,0,0,0.5)`
      memoState = true
    }
    else {
      memoCont.style.bottom = `-72%`
      timeBack.style.transitionDelay = 0
      timeBack.style.transition = `0.3s ease-in`
      timeBack.style.top = `8%`
      memoBtn.innerText = `memo`
      memoCont.style.boxShadow = `none`
      memoCont.style.backgroundColor = `transparent`
      memoState = false
    }
}

function init() {
  calendarBtn.addEventListener("click",moveCalendar)
  memoBtn.addEventListener("click",moveMemo)
}

init()