1.按下按键发出声音

获取播放的音频标签
```const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)```
发出声音
`audio.play()`
清楚按下其他按键报错
`if(!audio) return`
连续按下按键持续发出声音，清除音频内置时间
`audio.currentTime = 0`

2.按下按键改变样式

添加样式
`key.classList.add('playing')`
3.松开按键还原样式
获取所有的播放标签
`const keys = document.querySelectorAll('.key')`
循环遍历添加样式结束事件
```
keys.forEach(key => {
  key.addEventListener('transitionend', removepalyaudio)
})
```
当样式结束后清除样式
```
function removepalyaudio (e) {
  if(e.propertyName !== 'transform') return //个人觉得这句是多余的
  this.classList.remove('playing')
}
```
封装函数

`window.addEventListener('keydown', palyaudio)`