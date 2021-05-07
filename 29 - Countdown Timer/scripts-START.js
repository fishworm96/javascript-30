const displayLeft = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const controls = document.querySelectorAll('[data-time]')

let stopDown
function timer (time) {
  clearInterval(stopDown)
  showTimeOut(time)
  let now = Date.now()
  let nowSeconds = now + time * 1000
  countDown(nowSeconds)

  stopDown = setInterval(() => {
    let seconds = Math.round((nowSeconds - Date.now()) / 1000)
    if (seconds < 0) {
      clearInterval(stopDown)
      return
    }
    showTimeOut(seconds)
  }, 1000)

}

function showTimeOut (time) {
  let minutes = Math.floor(time / 60)
  let showSeconds = time % 60
  let showTime = `${minutes}:${showSeconds < 10 ? '0' : ''}${showSeconds}`
  displayLeft.textContent = showTime
  document.title = showTime
}

function countDown(data) {
  const nowTime = new Date(data)
  let hours = nowTime.getHours()
  let minute =  nowTime.getMinutes()
  let dateCut = `到${hours}:${minute < 10 ? '0' : ''}${minute}停止`
  endTime.textContent = dateCut
}

function controlsTime() {
  let buttonTime = this.dataset.time
  timer(buttonTime)
}

controls.forEach(button => button.addEventListener('click', controlsTime))

let custom = document.customForm.addEventListener('submit', function (e) {
  e.preventDefault()
  let customTime = this.minutes.value * 60
  timer(customTime)
  this.reset()
})