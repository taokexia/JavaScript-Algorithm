/*
 * 索引堆
 */
module.exports.IndexMaxHeap = class IndexMaxHeap {
    constructor() {
        this.data = []; // 最大索引堆中的数据
        this.index = []; // 最大索引堆中的索引
        this.count = 0;
    }
    init() {

    }
    // 提升子元素
    // 索引堆中，数据之间比较根据data大小进行比较，但实际操作是索引
    shiftUp(k) {
        var p = Math.floor((k-1)/2); // 父元素对应索引
        while(k > 0 && this.data[this.index[p]] < this.data[this.index[k]]) {
            this.swap(this.index, p, k);
            k = p;
            p = Math.floor((k-1)/2);
        }
    }
    // 索引堆中，数据之间比较根据data大小进行比较，但实际操作是索引
    shiftDown(k) {
        while((2*k+1) < this.count) {
            var j = 2 * k + 1;
            if(j+1 < this.count && this.data[this.index[j+1]] > this.data[this.index[j]]) {
                j++;
            }
            if(this.data[this.index[k]] >= this.data[this.index[j]]) break;
            this.swap(this.index, k, j);
            k = j;
        }
    }
    // 向最大堆中插入一个新元素
    insert(element) {
        var i = this.index.length;
        this.data.push(element);
        this.index.push(i);
        this.count++;
        this.shiftUp(i);
    }
    // 从最大索引堆中取出堆顶元素，即索引堆中所存储的最大数据
    extractMax() {
        var ret = this.data[this.index[0]];
        this.swap(this.index, 0, this.count-1);
        this.count--;
        this.shiftDown(0);
        return ret;
    }
    // 从最大索引堆中取出堆顶元素索引
    extractMaxIndex() {
        var ret = this.index[0];
        this.swap(this.index, 0, this.count-1);
        this.count--;
        this.shiftDown(0);
        return ret;
    }
    // 获取最大索引堆中的堆顶元素
    getMax() {
        return this.data[this.index[0]];
    }
    // 获取最大索引堆中的堆顶元素的索引
    getMaxIndex() {
        return this.index[0];
    }
    // 获取最大索引堆中索引为i的元素
    getItem(i) {
        return this.data[i];
    }
    // 修改最大索引堆中索引为i的元素
    change(i, newElement) {
        data[i] = newElement;
        for(var j = 0; j < this.count; j++) {
            if(this.index[j] === i) {
                this.shiftUp(j);
                this.shiftDown(j);
                return;
            }
        }
    }
    // 返回索引堆中的元素个数
    size() {
        return this.count;
    }
    // 判断当前索引堆是否为空
    isEmpty() {
        return this.count === 0;
    }
    swap(arr, a, b) {
        var t = arr[a];
        arr[a] = arr[b];
        arr[b] = t;
    }
}

// 使用最大索引堆进行排序
// 最大索引堆的主要作用不是用于排序，而是在最小生成树，最短路径算法中起到优化作用
module.exports.indexMaxHeapSort = function indexMaxHeapSort(arr) {
    var indexMaxHeap = new exports.IndexMaxHeap();
    for(var i = 0; i < arr.length; i++) {
        indexMaxHeap.insert(arr[i]);
    }
    for(var i = arr.length-1; i >= 0;i--) {
        arr[i] = indexMaxHeap.extractMax();
    }
}