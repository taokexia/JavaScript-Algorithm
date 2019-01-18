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

// 测试最大索引堆
console.log("==========测试最大索引堆=================");
var indexMaxHeap = require('./IndexMaxHeap');
var arr3 = [1, 8, 9, 2, 4, 5, 10, 21];
indexMaxHeap.indexMaxHeapSort(arr3);
console.log(arr3);

// 测试最小堆
console.log("==========测试最小堆=================");
var MinHeap = require('./MinHeap');
var minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(7);
minHeap.insert(6);
minHeap.insert(9);
minHeap.insert(4);
minHeap.insert(5);
console.log(minHeap.extractMin());
console.log(minHeap.getMin());
var minHeap2 = new MinHeap();
var arr3 = [1, 8, 9, 2, 4, 5, 10, 21];
// 利用最小堆排序;
minHeap2.init([...arr3]);
for(var i = 0; i < arr3.length; i++) {
    arr3[i] = minHeap2.extractMin();
}
console.log(arr3);