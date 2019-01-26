# 算法与数据结构

使用JavaScript来实现从常用的算法和数据结构

### 排序算法： 

- [冒泡排序](./JavaScript/Sort/BubbleSort.js)
- [选择排序](./JavaScript/Sort/SelectSort.js)
- [插入排序](./JavaScript/Sort/InsertSort.js)
- [归并排序](./JavaScript/Sort/MergeSortI.js)

### 数组：

- [数组](./JavaScript/Array/Array.js)

### 栈：

- [栈](./JavaScript/Stack.js)

### 队列:

- [队列](./JavaScript/Queue.js)
- [优先队列](./JavaScript/PriorityQueue.js)

### 链表：

- [单向链表](./JavaScript/LinkedList/LinkedList.js)
- [双向链表](./JavaScript/LinkedList/DoubleLinkedList.js)
- [双向循环链表](./JavaScript/LinkedList/DoubleLoopLinkedList.js)

### 堆：

- [最大堆](./JavaScript/Heap/MaxHeap.js)
- [最大索引堆](./JavaScript/Heap/IndexMaxHeap.js)
- [最小堆](./JavaScript/Heap/MinHeap.js)

### 树：
- [二叉树I](./JavaScript/Tree/BSTI.js)
- [二叉树II](./JavaScript/Tree/BSTII.js)

### 并查集:
一种树形结构，下面代码逐步优化.

- [并查集I](./JavaScript/UnionFind/UnionFindI.js)
- [并查集II](./JavaScript/UnionFind/UnionFindII.js)
- [并查集III](./JavaScript/UnionFind/UnionFindIII.js)
- [并查集IV](./JavaScript/UnionFind/UnionFindIV.js)
- [并查集V](./JavaScript/UnionFind/UnionFindV.js)

### 线段树:
一种树形结构，用于获取区间内数值操作的结果

- [线段树I](./JavaScript/SegmentTree/SegmentTree.js)
- [线段树II](./JavaScript/SegmentTree/SegmentTreeII.js)

### 字典树:
一种树型结构，用于字符串匹配

- [字典树](./JavaScript/Trie/Trie.js)

### 图论：

- [图的实现](./JavaScript/Graph/Graph.js)
- [稠密图](./JavaScript/Graph/DenseGraph.js)
- [稀疏图](./JavaScript/Graph/SparseGraph.js)
- [联通分量](./JavaScript/Graph/Components.js)
- [寻路算法](./JavaScript/Graph/Path.js)
- [最短路径算法](./JavaScript/Graph/ShortestPath.js)

### 最小生成树：

- [有权图边的定义](./JavaScript/RightGraph/Edge.js)
- [稠密图](./JavaScript/RightGraph/DenseGraph.js)
- [稀疏图](./JavaScript/RightGraph/SparseGraph.js)
- [Prim算法](./JavaScript/RightGraph/LazyPrimMST.js)
- [Prim算法II](./JavaScript/RightGraph/LazyPrimMSTII.js)
- [Kruskal算法](./JavaScript/RightGraph/KruskalMST.js)

### 经典算法：

- [二分查找](./JavaScript/Typical/binarySearch.js)
- [二分查找优化](./JavaScript/Typical/binarySearchAdv.js)

### 字符串相关算法：

- [Levenshtein Distance 莱文斯坦距离](./JavaScript/String/Levenshtein_Distance.js)

# 补充 #

## JavaScript测试算法性能 ##

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

## JavaScript迭代器的写法 ##

标准迭代器写法：每一次调用`next`方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含`value`和`done`两个属性的对象。其中，`value`属性是当前成员的值，`done`属性是一个布尔值，表示遍历是否结束。

    var it = makeIterator(['a', 'b']);
	it.next() // { value: "a", done: false }
	it.next() // { value: "b", done: false }
	it.next() // { value: undefined, done: true }
	
	function makeIterator(array) {
	  var nextIndex = 0;
	  return {
	    next: function() {
	      return nextIndex < array.length ?
	        {value: array[nextIndex++], done: false} :
	        {value: undefined, done: true};
	    }
	  };
	}

ES6的写法：默认的 `Iterator` 接口部署在数据结构的`Symbol.iterator`属性，或者说，一个数据结构只要具有`Symbol.iterator`属性，就可以认为是“可遍历的”（iterable）。

	const obj = {
	  [Symbol.iterator] : function () {
	    return {
	      next: function () {
	        return {
	          value: 1,
	          done: true
	        };
	      }
	    };
	  }
	};

使用generator：

	let generator = function* () {
	  yield 1;
	  yield* [2,3,4];
	  yield 5;
	};
	
	var iterator = generator();
	
	iterator.next() // { value: 1, done: false }
	iterator.next() // { value: 2, done: false }
	iterator.next() // { value: 3, done: false }
	iterator.next() // { value: 4, done: false }
	iterator.next() // { value: 5, done: false }
	iterator.next() // { value: undefined, done: true }
