var heap = require('./MaxHeap');

var MaxHeap = heap.maxHeap;
var maxHeap = new MaxHeap();

maxHeap.insert(1);
maxHeap.insert(2);
maxHeap.insert(7);
maxHeap.insert(6);
maxHeap.insert(8);
maxHeap.insert(3);

console.log(maxHeap.data);
// 取出最大值
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.data);
//测试堆排序
var arr1 = [1, 8, 9, 2, 4, 5, 10, 21];
heap.heapSort1(arr1);
console.log(arr1);
var arr2 = [1, 8, 9, 2, 4, 5, 10, 21];
heap.heapSort2(arr2);
console.log(arr2);
