1.获取标签并添加监听

获取到需要监听的每一个点击事件
```
const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]')
checkboxs.forEach(checkbox => checkbox.addEventListener('click', handCheck))
```

2.判断点击开始与点击结束

  1.判断点击的开始起点
  ```
  function handCheck(e) {
    console.log(this)
  }
  ```
  为了与结束终点分开需要改变this的指向，在函数外面声明变量，在函数体内改变开始的this指向，这里指向了开始的点击按钮
  ```
  let startcheck
  startcheck = this
  console.log('startcheck', startcheck)
  ```
  2.判断结束终点
  需要同时按下shift和存在checked属性，这里this指向最后点击的按钮。
  ```
  if(e.shiftKey && this.checked) {
      console.log('endchecke', this)}
  ```

3.把开始与结束之中的按钮都勾选上

  先声明变量，让变量为false，循环遍历出每一个按钮进行判断，当点击了开始的按钮就携带checked，让变量为true使中间的按钮勾选上，遇到结束的按钮时让变量为false到到终点结束。判断的时候可以通过取反来简写判断
  ```
  let isBetween = false
    checkboxs.forEach(checkbox => {
      if(checkbox === startcheck || checkbox === this) {
      isBetween = !isBetween
    }
    if(isBetween) {
      checkbox.checked = true
    }
    })
  ```