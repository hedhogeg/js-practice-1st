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
      calendarCont.style.boxShadow = `0 2px 0 10000px rgba(0,0,0,0.5)`
      calendarCont.style.backgroundColor = `rgba(0,0,0,0.5)`
      calendarState = true
    }
    else {
      calendarCont.style.top = `-72%`
      time.style.top = `8%`
      calendarBtn.innerText = "calendar"
      calendarCont.style.boxShadow = `none`
      calendarCont.style.backgroundColor = `transparent`
      calendarState = false
    }
}

function moveMemo() {
    if(!memoState) {
      memoCont.style.bottom = 0
      time.style.transition = `0.2s ease-out`
      time.style.transitionDelay = `0.79s`
      time.style.top = 0
      memoCont.style.boxShadow = `0 2px 0 10000px rgba(0,0,0,0.5)`
      memoCont.style.backgroundColor = `rgba(0,0,0,0.5)`
      memoState = true
    }
    else {
      memoCont.style.bottom = `-72%`
      time.style.transitionDelay = 0
      time.style.transition = `0.3s ease-in`
      time.style.top = `8%`
      memoCont.style.boxShadow = `none`
      memoCont.style.backgroundColor = `transparent`
      memoState = false
    }
}

calendarBtn.addEventListener("click",moveCalendar)
memoBtn.addEventListener("click",moveMemo)