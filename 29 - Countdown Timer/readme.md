这题的功能是完成一个计时器。
倒计时：首先定义一个函数，这个函数控制的是秒数，这里不使用setInterval直接来控制时间递减，因为浏览器在性能方面会把定时器给停掉。所以换一种方法。
现在的时间：现在定义一个变量，这个变量的值就是现在的时间`Date.now()`。
结束的时间：第二个变量是现在的时间加上要输入的秒数，这里的时间是毫秒所以转为秒要乘以1000。
倒计时就是输入的时间减去现在的时间，他每隔一秒就减一次就能实现倒计时，实现时间还不是秒是除以1000，然后用`Math.round`方法四舍五入就完成了倒计时。倒计时会一直执行，所以需要判断，当计算的时间小于0时，就停止计时器。

停止计时器：声明一个全局的变量，把函数里刚计算的时间赋值给他，再判断里执行`clearInterval()`停止倒计时,把值传到清楚倒计时里。现在还有一个问题，就是打印的时间少一秒。

展示时间：另外定义一个函数，这个函数的形参就是要倒计时的时间，再把这个函数放到倒计时函数的头部和if判断最后，头部传入要倒计时的时间，用来展示从几秒开始。尾部就是到实际计算的值。
  计算分钟：就是输入的时间除以60再用`Math.floor`向上取值
  计算秒数：剩余的时间余60
  展示的数据：用模板字符串拼接，秒数小于10时用三元表达式判断小于10就字符串加0否则为空
  标题时间：直接赋值给`document.title`
  渲染：获取到要渲染的位置元素，把要展示的时间赋值给`textContent`。倒计时开始时还要展示几点钟结束.

时间戳：这里要设置一个时间戳。定义一个函数，函数有一个形参，然后获取到现在的时间`new Date()`传入形参。
  小时：获取到要结束的时间`getHours()`
  分钟：获取到要结束的分钟`getMinutes()`
  再用模板字符串拼接起来，分钟小于10时前面加一个字符串0
  渲染：调用时间戳，传入的参数就是`前面获取的结束的时间`，获取到要渲染的元素，使用`textContent`赋值。

额定时间：首先获取到要点击的元素，这里获取自定义属性。因为有多个所以循环遍历出来监听button事件，获取到它的`this.dataset.time`，这里获取的值就是额定的倒计时，直接传入倒计时函数。点击多个倒计时时会出现错乱，原因就是开启了多个倒计时，清除倒计时要在时间结束，这里就在倒计时函数开始清除倒计时。

自定义时间：获取到自定义属性，监听这个函数的提交事件。这里要阻止表单默认提交e.preventDefault()
  分钟：就是这个自定义属性的`value`值，再次调用倒计时函数传入输入的值乘以60即倒计时分钟。