/*
 * 最大堆
 */
module.exports.maxHeap = class MaxHeap {
    constructor() {
        this.data = [];
        this.count = 0;
    }
    // 初始化堆
    // 传递一个数组,通过heapify快速生成堆
    init(arr) {
        if(arr instanceof Array) {
            this.data = arr;
            this.count = arr.length;
            this.heapify(arr);
        }        
    }
    // 通过函数快速生成最大堆
    heapify(arr) {
        var count = arr.length;
        for(var i = Math.floor(count/2); i >= 0; i--) {
            this.shiftDown(i);
        }
    }
    // 返回堆中的元素个数
    size() {
        return this.count;
    }
    // 判断堆中是否为空
    isEmpty() {
        return this.count === 0;
    }
    // 提升元素,但插入新元素的时候，判断该元素是不是最大值
    // 索引从0开始，所以i元素的左子元素为2*i+1,右子元素为2*i+2,i元素的父元素为(i-1)/2
    shiftUp(k) {
        while(k >= 0 && this.data[Math.floor((k-1)/2)] < this.data[k]) {
            // 如果子元素大于父元素,交换位置
            this.swap(this.data, Math.floor((k-1)/2), k);
            k = Math.floor((k-1)/2);
        }
    }
    // 向最大堆中插入一个新的元素
    insert(element) {
        this.data.push(element);
        this.count = this.data.length;
        // 判断新插入的元素是不是最大值
        this.shiftUp(this.count-1);
    }
    // 从最大堆取出元素后，需要重新获得最大值，放到堆的顶部
    shiftDown(k) {
        while(2*k+1 <= this.count-1) {
            // 左子元素对应的索引
            var j = 2 * k + 1;
            if(j+1 <= this.count-1 && this.data[j+1] > this.data[j]) {
                // 判断当前右子元素是否存在，值是否大于子左元素
                j++;
            }
            // 如果父元素大于子元素，则不用交换，保持原来位置
            if(this.data[k] >= this.data[j]) break;
            this.swap(this.data, k, j);
            k = j;
        }
    }
    // 优化shiftDown,使用赋值的方式取代不断的swap
    // 优化思路借鉴插入排序的优化思路
    shiftDownII(k) {
        // 先保持k索引对应的值
        var t = this.data[k];
        while(2*k+1 <= this.count-1) {
            var j = 2 * k + 1;
            if(j+1 <= this.count-1 && this.data[j+1] > this.data[j]) {
                j++;
            }
            if(t > this.data[j]) break;
            arr[k] = arr[j];
            k = j;
        }
        // 最后再赋值
        this.data[k] = e;
    }
    // 从最大堆中取出堆顶元素，即堆中所存储的最大数据
    extractMax() {
        if(this.count <=0) return;
        var ret = this.data[0];
        this.swap(this.data, 0, this.count-1);
        this.count--;
        // 更新堆顶
        this.shiftDown(0);
        return ret;
    }
    // 获取堆的最大值
    getMax() {
        return this.data[0];
    }
    // 交换数据
    swap(arr, a, b) {
        var t = arr[a];
        arr[a] = arr[b];
        arr[b] = t;
    }
}

// 堆排序1
// 时间复杂度O(nlogn)
module.exports.heapSort1 = function heapSort1(arr) {
    var maxHeap = new exports.maxHeap();
    for(var i = 0; i < arr.length; i++) {
        maxHeap.insert(arr[i]);
    }
    for(var i = arr.length-1; i >= 0; i--) {
        arr[i] = maxHeap.extractMax();
    }
}

// 堆排序2
// 借助heapify过程创建堆
// 此时创建堆的过程时间复杂度为O(n),将所有元素依次从堆中取出来，时间复杂度为O(nlogn)
// 总体时间复杂度仍为O(nlogn)，但优化了创建堆的时间
module.exports.heapSort2 = function heapSort2(arr) {
    var maxHeap = new exports.maxHeap();
    maxHeap.init(arr);
    for(var i = arr.length-1; i >= 0; i--) {
        arr[i] = maxHeap.extractMax();
    }
}
