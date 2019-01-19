// 测试二分查找法
var bs = require('./binarySearch');
var arr1 = [0, 1, 2, 3, 4, 5, 10, 23, 44, 66, 88, 99];
console.log(bs.binarySearch1(arr1, 10));
console.log(bs.binarySearch2(arr1, 88));

// 测试优化后的二分查找法
console.log("=================测试优化后二分查找========================");
var bsAdv = require('./binarySearchAdv');
var arr2 = [1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6];
console.log(bsAdv.floor(arr2, 4));
console.log(bsAdv.ceil(arr2, 6));
console.log(bsAdv.floor(arr2, 5));
console.log(bsAdv.ceil(arr2, 5));
// 比较性能
console.time("binarySearch");
console.log(bs.binarySearch1(arr2, 4));
console.timeEnd("binarySearch");
console.time("binarySearchAdv");
console.log(bsAdv.floor(arr2, 4));
console.timeEnd("binarySearchAdv");