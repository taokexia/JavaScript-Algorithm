// 最小索引堆
module.exports = class IndexMinHeap {
    constructor() {
        this.data = []; // 最小索引堆的数据
        this.indexes = []; // 最小索引堆的索引，indexes[x] = i 表示索引i在x的位置
        this.reverse = []; // 最小索引堆中的方向索引， reverse[i] = x 表示索引i在x的位置
        this.count = 0;
    }
    // 索引堆中，数据之间比较根据data的大小进行比较，但实际操作的是索引
    shiftUp(k) {
        while(k > 0 && this.data[this.indexes[Math.floor((k-1)/2)]] > this.data[this.indexes[k]]) {
            this.swap(this.indexes, Math.floor((k-1)/2), k);
            this.reverse[this.indexes[Math.floor((k-1)/2)]] = Math.floor((k-1)/2);
            this.reverse[this.indexes[k]] = k;
            k = Math.floor((k-1)/2);
        }
    }
    // 索引堆中，数据之间比较根据data的大小进行比较，但实际操作的是索引
    shiftDown(k){
        while(2*k+1 < this.count) {
            let j = 2*k+1;
            if(j + 1 < this.count && this.data[this.indexes[j]] > this.data[this.indexes[j+1]]) j++;
            if(this.data[this.indexes[k]] <= this.data[this.indexes[j]]) break;
            this.swap(this.indexes, k, j);
            this.reverse[this.indexes[k]] = k;
            this.reverse[this.indexes[j]] = j;
            k = j;
        }
    }
    // 向最小索引堆中插入一个新的元素，元素为item
    insert(item) {
        this.data[this.count] = item;
        this.indexes[this.count] = this.count;
        reverse[this.count] = this.count;
        shiftUp(this.count);
        this.count++;
    }
    // 返回索引堆中的元素个数
    size() {
        return this.count;
    }
    // 返回索引堆中是否为空
    isEmpty() {
        return this.count === 0;
    }
    swap(arr, a, b) {
        let t = arr[a];
        arr[a] = arr[b];
        arr[b] = t;
    }
}