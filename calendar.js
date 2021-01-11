const upBtn = document.querySelector(".calendarMonthUpLogo")
const downBtn = document.querySelector(".calendarMonthDownLogo")
const monthWrap = document.querySelector(".calendarMonthWrap")
const calendarMain = document.querySelector(".calendarMain")

let currentMonth = 0

function makeBox() {
  for (let i = 35; i < 42; i++) {
    const box = document.createElement("article")
    box.className = `box${i}`
    calendarMain.appendChild(box)
  }
}

function deleteBox() {
  for (let i = 35; i < 42; i++) {
    const box = calendarMain.querySelector(`.box${i}`)
    calendarMain.removeChild(box)
  }
}

function printMonth() {
  const showingFirstDate = new Date(2021, currentMonth - 1, 1)
  const showingLastDate = new Date(2021, currentMonth - 1, 0)
  const firstDay = showingFirstDate.getDay()
  const lastDate = showingLastDate.getDate()
  for (let i = firstDay; i < firstDay + lastDate; i++) {
    const dateBox = calendarMain.querySelector(`.box${i}`)
    dateBox.innerHTML = `<span>${i - firstDay + 1}</span>`
  }
}

function showMonth() {
  const showingFirstDate = new Date(2021, currentMonth - 1, 1)
  const showingLastDate = new Date(2021, currentMonth - 1, 0)
  const firstDay = showingFirstDate.getDay()
  const lastDate = showingLastDate.getDate()
  if (lastDate == 31 && firstDay == 5) {
    makeBox()
    for (let i = 0; i < 42; i++) {
      const dateBox = calendarMain.querySelector(`.box${i}`)
      const dateSpan = dateBox.querySelector("span")
      if(dateSpan){
        dateBox.removeChild(dateSpan)
      }
    }
  }
  else if (lastDate == 31 && firstDay == 6) {
    makeBox()
    for (let i = 0; i < 42; i++) {
      const dateBox = calendarMain.querySelector(`.box${i}`)
      const dateSpan = dateBox.querySelector("span")
      dateBox.removeChild(dateSpan)
    }
  }
  else if (lastDate == 30 && firstDay == 6) {
    makeBox()
    for (let i = 0; i < 42; i++) {
      const dateBox = calendarMain.querySelector(`.box${i}`)
      const dateSpan = dateBox.querySelector("span")
      dateBox.removeChild(dateSpan)
    }
  }
  else {
    deleteBox()
    for (let i = 0; i < 35; i++) {
      const dateBox = calendarMain.querySelector(`.box${i}`)
      const dateSpan = dateBox.querySelector("span")
      dateBox.removeChild(dateSpan)
    }
  }
  printMonth()
}

function showCurrentMonth() {
  const today = new Date()
  const cMonth = today.getMonth()
  monthWrap.style.top = `${cMonth * (-100)}%`
  currentMonth = cMonth + 1
  showMonth()
}

function monthUp() {
  let monthPos = parseInt(monthWrap.style.top.slice(0,-1))
  if(monthPos !== 0) {
    monthWrap.style.top = `${monthPos+100}%`
    currentMonth -= 1
    showMonth()
  }
}

function monthDown() {
  let monthPos = parseInt(monthWrap.style.top.slice(0,-1))
  if(monthPos !== -1100) {
    monthWrap.style.top = `${monthPos-100}%`
    currentMonth += 1
    showMonth()
  }
}

function init() {
  upBtn.addEventListener("click",monthUp)
  downBtn.addEventListener("click",monthDown)
  showCurrentMonth()
}

init()