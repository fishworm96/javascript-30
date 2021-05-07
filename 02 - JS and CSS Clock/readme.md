1.指针转动

让指针绕着圆心转动
`transform-origin: 100%;`
调整初始角度
`transform: rotate(90deg);`
调整每次转动的样式
`transition: all 0.05s cubic-bezier(0.25, 0.1, 0.69, 1.85);`

2.指针转动逻辑

获取元素
```
const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
```
创建时间对象并对每次时间做出角度调整
```
function setDate() {
      const now = new Date()
      // 秒
      const seconds = now.getSeconds()
      //每过一秒增加6度
      const secondsDegrees = (seconds * 6) + 90
      //把获得的角度赋值给样式
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`

      // 分
      const mins = now.getMinutes()
      const minsDegrees = (mins * 6) + ((seconds / 60) * 6) + 90
      minsHand.style.transform = `rotate(${minsDegrees}deg)`

      // 时
      const hours = now.getHours()
      const hoursDegrees = (hours * 30) + ((mins / 60) * 30) + ((seconds / 3600) * 30) + 90
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`
      console.log(`${hours} 时 ${mins} 分 ${seconds} 秒`)
    }
```
//每过一秒调用一次函数调整角度
`setInterval(setDate, 1000)`
//初始化时钟，避免初次打开需要等待1秒加载
`setDate()`