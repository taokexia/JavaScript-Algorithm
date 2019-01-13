// 测试 字典
var Dict = require('./Dict');

// 创建字典对象
var dict = new Dict();
// 在字典中添加元素
dict.set("age", 18)
dict.set("name", "Happy")
dict.set("height", 1.88)
dict.set("address", "广州市")

// 获取字典的信息
console.log(dict.keys()) // [ 'age', 'name', 'height', 'address' ]
console.log(dict.values()) // [ 18, 'Happy', 1.88, '广州市' ]
console.log(dict.size()) // 4
console.log(dict.get("name")) // Happy

// 字典的删除方法
dict.remove("height")
console.log(dict.keys())// [ 'age', 'name', 'address' ]

// 清空字典
dict.clear()