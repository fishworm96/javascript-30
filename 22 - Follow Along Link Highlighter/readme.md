1.元素

  定义一个高亮，高亮这个常量下创建一个span元素，给这个高亮的span添加heghlight样式，再把元素插入到body中
  现在目标元素是a链接，获取到所有的a链接。遍历循环a链接监听一个mouseenter事件。使用this.getBoundingClientRect()方法返回目标元素的坐标宽度高度。给定高亮样式宽度和高度，就是获取到目标的高度和宽度。现在高亮还没有跟随目标，使用高亮下的transform改变元素的坐标。因为滚动屏幕样式的位置会改变，所以位置要加上滚动的距离。