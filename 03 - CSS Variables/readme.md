1.获取修改的标签

获取到要修改的标签
`const inputs = document.querySelectorAll('input')`
根据标签将其循环遍历携带改变事件,改变时触发
`inputs.forEach(input => input.addEventListener('change', handUpdate))`

2.添加全局css变量

首先定义一个css样式
```
img {
      padding: 5px;
      filter: 2px;
      background-color: #ffc600;
    }
```
定义一个全局的css变量,其中变量名称不能是css原始样式名字
```
:root {
      --spacing: 5px;
      --blur: 2px;
      --base: #ffc600;
    }
```
将样式动态绑定到css上
```
img {
      padding: var(--spacing);
      filter: blur(var(--blur));
      background-color: var(--base);
    }
.hl {
  color:var(--base)
}
```

3.动态赋值给样式

先给input标签添加一个自定义样式名称
`data-sizing="px"`
根据页面数据自动调整
```
function handUpdate() {
      //this.dataset 代表所有的自定义样式，利用或方法判断，遇到背景色修改让背景色的单位为空
      const suffix = this.dataset.sizing || ''
      //document.documnentElement代表整个html文档，style下有setProperty属性，可以控制全局变量`--${this.name}`就是样式中的name值
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    }
```