const upBtn = document.querySelector(".calendarMonthUp")
const downBtn = document.querySelector(".calendarMonthDown")
const monthWrap = document.querySelector(".calendarMonthWrap")

function currentMonth() {
  const today = new Date()
  const cMonth = today.getMonth()
  monthWrap.style.top = `${cMonth * (-100)}%`
}

function monthUp() {
  let monthPos = parseInt(monthWrap.style.top.slice(0,-1))
  if(monthPos !== 0) {
    monthWrap.style.top = `${monthPos+100}%`
  }
}

function monthDown() {
  let monthPos = parseInt(monthWrap.style.top.slice(0,-1))
  if(monthPos !== -1100) {
    monthWrap.style.top = `${monthPos-100}%`
  }
}

function init() {
  upBtn.addEventListener("click",monthUp)
  downBtn.addEventListener("click",monthDown)
  currentMonth()
}

init()