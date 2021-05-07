这题实现的功能是拖动图片实现位移，需要先获取到要控制的元素。
1.设置一个鼠标按下去的起始点`let startX`
2.定义一个开关，判断鼠标是否按下`let isDown = false`
3.定义左右滚动初始的位置 `let scrollLeft`

下面监听四个事件`'mousedown', 'mouseup', 'mouseleave', 'mousemove'`

`mousedown`控制鼠标点击，当鼠标点击时会有一个扩大的样式效果。所以给`slider`添加一个定义好的`active`样式。现在这个事件下有一个`e.pageX`就是鼠标点击的位置，如果这样页面有一个`margin`这个位置就不会准确。所以需要减去margin的距离，得到的就是真正鼠标点击的位置，也就是起始点的位置。计算的方法是`e.pageX - slider.offsetLeft`，`slider.offsetLeft`就是元素到最左边的距离。

`mouseup`控制鼠标弹起，去除扩大样式和鼠标点击布尔值

`mouseleave`和`mouseup`一样

`mousemove`控制拖动的位置，先判断有没有点击就是`isDown`是否为`true`。使用`e.pageX - slider.offsetLeft`计算出就是鼠标拖动的距离，往左是减小往右是增加。现在鼠标点击的位置减去起始点的位置得到的就是鼠标移动的距离，把这个值赋给`slider.scrollLeft`。这计算出来的结果是移动的值，但是每次移动又重新给他赋值，移动的位置就会出现问题。现在用`scrollLeft`获得距离左侧起始的位置即`slider.scrollLeft`，再用这个值减去现在移动的距离。