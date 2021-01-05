const currentTime = document.querySelector(".currentTime")
const currentMD = document.querySelector(".currentMD")
const currentDay = document.querySelector(".currentDay")
const timeSquare = document.querySelector(".time")
const timeSquareBack = document.querySelector("#timeBack")

function setTimeSize() {
  let timeSquareWidth = timeSquareBack.offsetWidth - 20 + "px"
  let timeSquareHeight = timeSquareBack.offsetHeight - 20 + "px"
  timeSquare.style.width = timeSquareWidth
  timeSquare.style.height = timeSquareHeight
}

function showTime() {
  let now = new Date()
  const month = now.getMonth() + 1
  const date = now.getDate()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const dayNum = now.getDay()
  currentTime.innerText = `${hour < 10 ? `0${hour}` : hour} : ${minute < 10 ? `0${minute}` : minute}`
  currentMD.innerText = `${month}. ${date}.`
  let day = ""
  switch (dayNum) {
    case 0:
      day = "Sun"
      break
    case 1:
      day = "Mon"
      break
    case 2:
      day = "Tue"
      break
    case 3:
      day = "Wed"
      break
    case 4:
      day = "Thu"
      break
    case 5:
      day = "Fri"
      break
    case 6:
      day = "Sat"
      break
  }
  currentDay.innerText = day
}

function init() {
  showTime()
  setInterval(showTime, 10000)
  setTimeSize()
  window.addEventListener("resize",setTimeSize)
}

init()
