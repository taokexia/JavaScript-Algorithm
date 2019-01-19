# 算法与数据结构

使用JavaScript来实现从常用的算法和数据结构

JavaScript用于测试算法性能的常用方法总结:<br/>
方法一：

    console.time("time");
	// 测试的算法
	console.timeEnd("time");

方法二：

	var start = Date.now();
	// 测试的算法
	var end = Date.now();
	console.log(end-start);


排序算法：

- [冒泡排序](./JavaScript/Sort/BubbleSort.js)
- [选择排序](./JavaScript/Sort/SelectSort.js)
- [插入排序](./JavaScript/Sort/InsertSort.js)
- [归并排序](./JavaScript/Sort/MergeSortI.js)

链表：

- [单向链表](./JavaScript/LinkedList/LinkedList.js)
- [双向链表](./JavaScript/LinkedList/DoubleLinkedList.js)
- [双向循环链表](./JavaScript/LinkedList/DoubleLoopLinkedList.js)

堆：

- [最大堆](./JavaScript/Heap/MaxHeap.js)
- [最大索引堆](./JavaScript/Heap/IndexMaxHeap.js)
- [最小堆](./JavaScript/Heap/MinHeap.js)

树：
- [二叉树I](./JavaScript/Tree/BSTI.js)
- [二叉树II](./JavaScript/Tree/BSTII.js)

经典算法：

- [二分查找](./JavaScript/Typical/binarySearch.js)
- [二分查找优化](./JavaScript/Typical/binarySearchAdv.js)
