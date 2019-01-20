/*
 * 最小堆
 * 堆的本质是一种树形结构
 */
module.exports = class MinHeap {
    constructor() {
        this.data = [];
        this.count = 0;
    }
    // 初始化数组
    init(arr) {
        this.data = arr;
        this.count = arr.length;
        for(var i = Math.floor(this.count/2-1); i >= 0; i--) {
            this.shiftDown(i);
        }
    }
    // 提升元素
    // 把小的元素位置往上提升
    shiftUp(k) {
        while(k > 0 && this.data[Math.floor((k-1)/2)] > this.data[k]) {
            this.swap(this.data, Math.floor((k-1)/2), k);
            k = Math.floor((k-1)/2);
        }
    }
    // 下降元素
    // 当顶部弹出元素后，用于重新获得最小的元素
    shiftDown(k) {
        while(2*k+1 < this.count) {
            var j = 2*k+1;
            if(j+1 < this.count && this.data[j+1] < this.data[j]) {
                j++;
            }
            if(this.data[k] <= this.data[j]) break;
            this.swap(this.data, k, j);
            k = j;
        }
    }
    // 向最小堆中插入一个新元素
    insert(element) {
        this.data.push(element);
        this.shiftUp(this.count);
        this.count++;
    }
    // 从最小堆中取出堆顶元素
    extractMin() {
        var ret = this.data[0];
        this.swap(this.data, 0, this.count-1);
        this.count--;
        this.shiftDown(0);
        return ret;
    }
    // 获取最小堆中的堆顶元素
    getMin() {
        return this.data[0];
    }
    // 返回堆中元素的个数
    size() {
        return this.count;
    }
    // 判断当前堆中是否为空
    isEmpty() {
        return this.count === 0; 
    }
    // 交换元素
    swap(arr, a, b) {
        var t = arr[a];
        arr[a] = arr[b];
        arr[b] = t;
    }
}