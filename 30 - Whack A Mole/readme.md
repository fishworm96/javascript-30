这题的功能是打地鼠

  元素：先获取到要控制的元素。`score`用来计数，`mole`用来判断是否点击了地鼠。
  初始化：
    setScore：定义一个函数`setScore`，有一个形参。在全局先定义一个变量`score`初始化为0，就是初始化得分。函数内`score = s`把传入的值赋给这个变量。使用`scoreBoard.textContent = score`就是所得的分数。
    startGame：用来初始化的函数`startGame`，设置一个初始化的值`setScore(0)`，用来初始化分数。
      开关：再定义一个全局变量`timeUp`，控制游戏的时间，这个值是布尔值。函数内控制这个值，这个值为false。表示游戏还没结束。
      游戏时间：设置一个延迟函数，延迟10000秒，时间到达`timeUp`的值为`true`并弹出提示，时间到。弹出一个`alert`提示用户时间结束。再函数里调用，`getRandomMole()`随机数，后面使用。
    状态：定义一个全局常量`status`，使用`reduce`方法使每个div先初始化，添加false。如果为true就弹出地鼠。

```
    const status = moles.reduce((prev, current, index) => {
        prev[index] = false
        return prev
        },{})
```

​    控制地鼠显示与隐藏:定义一个常量`molesProxy`，从数据源`status`中获取数据，`get`表示代理，`target`代表`status`，`key`即数据源的键，`value`传递过来的值。
`set`中获取到 `value`值，先初始化，再判断，`value`是否为`true`，`true`表示开始游戏，给div添加样式弹出地鼠，添加点击事件。否则结束游戏，移除地鼠样式。最后还要调用点击事件。
```
    cosnt clickHandle = function () {}
    const molesProxy = new Proxy(status, {
          get(target, key) {
            return target[key]
            }，
            set(target, key, value) {
              target[key] = value
              moles[key].removeEventListener('click', clickHandle)
              if(value) {
              moles[key].addEventListener('click', clickHandle)
              moles[key].classList.add('up')
            }else {
              moles[key].classList.remove('up')
            }
            }
        })
```
点击地鼠：执行这个点击事件，初始化`moles.indexOf(this)`表示询问点击的是第几个样式，`molesProxy`表示查询`value`值是否为`true`,利用`score + 1`来控制获得的分数，能够防止作弊。`molesProxy[moles.indexOf(this)] = false`用来控制弹起后点击落下。
```
    const clickHandle = function () {
      if(molesProxy[moles.indexOf(this)] {
        setScore(score + 1)
        molesProxy[moles.indexOf(this)] = false
      })
    }
```

  随机数：定义一个常量接收函数`getRandomMole`。
    计算：定义一个常量`mole`用来接收随机出现的地鼠。`Math.floor(Math.random() * moles.lenth)`
    随机出现时间：定义一个常量`time`接收随机的时间。`Math.random() * (1000 - 500) + 500`
    判断是否出现：`if(molesProxy[mole]) return getRandomMole()`，如果已经出现，就换一个，直到没有出现过的。
    出现地鼠：molesProxy[mole] = true
    延迟多久出现：这里if判断时间是否结束，如果还没结束，就会继续出地鼠。如果时间结束就不出地鼠。这里每次出地鼠的时间是上面获得的随机事件`time`
```
    setTimeout(() => {
      if(!timeUp) getRandomMole()
      molesProxy[mole] = false
    }, time)
```