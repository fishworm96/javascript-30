1.获取元素

  获取到所有自定义元素，通过map遍历出所有的时间数组，再次map遍历出所有的时间数字，使用split方法把时间中的冒号去除掉。因为遍历出来的的是字符串，所以使用map再次遍历parseFloat方法把字符串改为浮点数字，通过数据结构赋值给一个常量。再return时间把分钟转换为秒。再用reduce把所有的时间相加

2.计算

  把获得的所有秒数赋值给要展示的秒数变量里，先计算小时，秒数除以3600秒即小时，秒数有很多余数，使用math.floor方法，方法获得这个小数进一位最大值，再把剩余的秒数余3600秒计算出剩余的总分钟秒数。
  分钟的方法相同，除以60秒即得到分钟数。剩余的总秒数余60即要获得的秒数。