// 测试二叉树
var BST = require('./BST');

// 测试代码
var bst = new BST();
// 插入数据
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);
// 测试前序遍历结果
var resultString = "";
bst.preOrderTraversal(function (key) {
    resultString += key + " ";
})
console.log(resultString); // 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25

// 测试中序遍历结果
resultString = "";
bst.inOrderTraversal(function (key) {
    resultString += key + " ";
})
console.log(resultString); // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25

// 测试后续遍历结果
resultString = "";
bst.postOrderTraversal(function (key) {
    resultString += key + " ";
})
console.log(resultString); // 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11

// 获取最值
console.log(bst.getMin()); // 3
console.log(bst.getMax()); // 25

// 查找特定的值
console.log(bst.search(10)); // true
console.log(bst.search(21)); // false

// 查找数据
console.log(bst.remove(10)); // true
console.log(bst.remove(20)); // true
console.log(bst.remove(21)); // false

// 测试前序遍历结果
var resultString = "";
bst.preOrderTraversal(function (key) {
    resultString += key + " ";
})
console.log(resultString); // 11 7 5 3 6 9 8 15 13 12 14 25 18
