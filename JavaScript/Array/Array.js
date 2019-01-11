// 数组的创建
var arr1 = new Array();
// 等价于
var arr2 = [];

var arr3 = new Array(1, 2, 3);
// 等价于
var arr4 = [1, 2, 3];

var arr5 = new Array(10).fill(0);
// 等价于
var arr6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


// 获取数组长度
console.log("数组长度：" + arr6.length);


// 遍历数组
// 方式1
for(var i = 0; i < arr6.length; i++) {
    console.log(arr6[i]);
}
// 方式2
arr6.forEach((value) => {
    console.log(value);
})


// 常见操作
// 添加元素
arr6[arr6.length] = 10;
arr6.push(10);
arr6.push(10, 11);
// 向头部增加元素
arr1.unshift(0);
// 增加指定元素
arr1.splice(4, 0, 1, 2, 3);
// 指从索引4开始，增加1, 2, 3这3个元素

// 删除元素
// 删除尾部的元素
arr6.pop();
// 删除头部的元素
arr6.shift();
// 删除指定位置的元素
arr6.splice(4, 3);
// 指从索引4开始，删除3个元素

// 修改指定位置的元素
arr6.splice(4, 3 , 1, 2, 3);
// 指从索引4开始，删除3个元素, 增加1, 2, 3这3个元素


// 数组的合并
var arr7 = [1, 2, 3];
var newArr7 = arr6.concat(arr7); 

// 数组的截取
var arr8 = arr6.slice(0, 6);
// 截取前6个元素

// 获取索引
var i = arr6.indexOf(0);
// 获取第1个0对应的索引
var lastI = arr6.lastIndexOf(0);
// 获取最后1个0对应的索引
// 如果没有找到返回-1

// 使用reduce
// 进行累加计算
var total = arr7.reduce((pre, cur) => {
    return pre + cur;
})
