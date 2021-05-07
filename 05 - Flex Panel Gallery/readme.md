1.css部分

把竖屏布局改为横屏布局，在panel父级panels中使用`display:flex`,填满整个屏幕使用`flex:1`。文字按照y轴分布，使用`flex-direction: column`，panels下的p标签也需要弹性布局，文字居中使用`display: flex; justify-content: center; align-items: center`，panel标签下的第一个和最后一个p标签样式都在窗口外面`tansform: translateY(-100%);transform: translateY(100%)`打开时所点击的盒子会打开，文字回到原位`flex: 5;transform:translateY(0)`。

2.js部分

获取所有panels下的标签，并且监听事件
```
const panels = document.querySelectorAll('.panel')
//监听点击事件
panels.forEach(panel => panel.addEventListener('click', toggleOpen))
//监听样式完成，弹出文字
    panels.forEach(panel => panel.addEventListener('transitionend', openActive))
```

利用toggle来完成打开和关闭
```
function toggleOpen () {
      this.classList.toggle('open')
    }
```
弹出文字需要之前样式全部加载成功再弹出，加载成功后所点击的标签下面会有flex样式。propertyName中包含了flex就执行弹出文字。
```
function openActive (e) {
      if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
      }
    }
```