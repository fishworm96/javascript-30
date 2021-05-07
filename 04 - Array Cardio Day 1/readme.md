题目1
使用filter过滤出inventors数组中出生的年龄
`const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1600)`

题目2
使用map循环遍历数组，把fistname和lastname进行拼接后重新返回一个数组
`const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)`

题目3
使用sort对数组进行排序，sort传入2个值，利用箭头函数对传入的值判断，a-b > 0 返回 1 a往后移 a-b < 0 返回-1b往前移 a-b = 0 位置不动
`const ordered = inventors.sort((a, b) => a.year - b.year)`

题目4
利用reduce归并方法，reduce可以传入4个值，前1个值、现在的值、索引和这个数组。这里用2个值前一个值和现在的值total为前一个值，这里要为函数初始化一个0，不然运算结果为字符串拼接。
`const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0)`

题目5
利用sort从小到大排列年龄
`const oldset = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year))`

题目6
获取到此网站中所有带de字符串的名字，首先获取这个作用域内的父级标签，category.querySelectorAll('a')等同于document.querySelector('.mw-category a')。这个数组所接收的结果是Nodearray，Nodearray和Array不同，这个数组下没有map方法。方法一，把利用es6的展开符，把Nodearray转为Array.方法二利用Array.from把Nodearray转为数组。再利用mp方法获得到a标签下所有的文字内容，再利用filter和includes方法过滤出包含de的内容，返回值为true。遍历的就是所得的内容
```
    // const category = document.querySelector('.mw-category')
    // //第一种方法
    // // const links = [...category.querySelectorAll('a')]
    // //第二种方法
    // const links = Array.from(category.querySelectorAll('a'))
    // const de = links
    //                 .map(link => link.textContent)
    //                 .filetr(streeName => streeName.includes('de'))
```

题目7
利用sort对数组进行排序，先利用split方法把', '分割开，保存再分别保存在数组中。再把需要排序的数组进行比对重新组成数组。
```
const alpha = people.sort((a, b) => {
      const [aFirst, aList] = a.split(', ')
      const [bFirst, bList] = b.split(', ')
      return aList > bList ? 1 : -1
    })
```

题目8
利用reduce归并方法，需要把所有的字符串初始化先保存在对象中，利用if(obj[item] === undefined)来判断数组中是否有这个名字，如果没有利用obj[item] = 0把名字保存在数组中。判断语句可以简写成if(!obj[item]),每次遍历到有这个名字就自加1
```
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
    const transportation = data.reduce((obj, item) => {
      if(!obj[item]) {
        obj[item] = 0
      }
      obj[item]++
      return obj
    },{})
```