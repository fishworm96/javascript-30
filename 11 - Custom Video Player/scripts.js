const players = document.querySelector('.player')
const video = players.querySelector('.viewer')
const toggle = players.querySelector('.toggle')
const skips = players.querySelectorAll('[data-skip]')
const sliders = players.querySelectorAll('.player__slider')
const progress = players.querySelector('.progress')
const filled = players.querySelector('.progress__filled')
// console.dir(video)

function checkPlayer(e) {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

function handleToggle() {
  const icon = video.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

skips.forEach(skip => skip.addEventListener('click', function() {
  video.currentTime += parseFloat(skip.dataset.skip)
}))

function handleslider() {
  video[this.name] = this.value
}

function handlefilled() {
  const time = (video.currentTime / video.duration) * 100
  filled.style.flexBasis = `${time}%`
}

function handleProgress(e) {
  const clickProgress = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = clickProgress
}

let control = false

video.addEventListener('click', checkPlayer)
toggle.addEventListener('click', checkPlayer)
video.addEventListener('click', handleToggle)
toggle.addEventListener('click', handleToggle)
sliders.forEach(slider => slider.addEventListener('change', handleslider))
sliders.forEach(slider => slider.addEventListener('mousemove', handleslider))
video.addEventListener('timeupdate', handlefilled)

progress.addEventListener('click', handleProgress)
progress.addEventListener('mousedown', () => control = true)
progress.addEventListener('mouseup', () => control = false)
progress.addEventListener('mousemove',(e) => control && handleProgress(e))