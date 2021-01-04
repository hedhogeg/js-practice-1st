const calendarCont = document.querySelector(".calendarContainer")
const calendarBtn = document.querySelector(".calendarBtn")
const memoCont = document.querySelector(".memoContainer")
const memoBtn = document.querySelector(".memoBtn")
const time = document.querySelector(".time")

let calendarState = false
let memoState = false

function moveCalendar() {
    if(!calendarState) {
      calendarCont.style.top = 0
      time.style.transition = `1s ease-in-out`
      time.style.top = `80%`
      calendarBtn.innerText = "Close"
      calendarState = true
    }
    else {
      calendarCont.style.top = `-72%`
      time.style.top = `8%`
      calendarBtn.innerText = "calendar"
      calendarState = false
    }
}

function moveMemo() {
    if(!memoState) {
      memoCont.style.bottom = 0
      time.style.transition = `0.2s ease-out`
      time.style.transitionDelay = `0.79s`
      time.style.top = 0
      memoState = true
    }
    else {
      memoCont.style.bottom = `-72%`
      time.style.transitionDelay = 0
      time.style.transition = `0.3s ease-in`
      time.style.top = `8%`
      memoState = false
    }
}

calendarBtn.addEventListener("click",moveCalendar)
memoBtn.addEventListener("click",moveMemo)