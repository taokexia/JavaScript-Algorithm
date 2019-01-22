/* 
 * 最小堆
 */
module.exports = class MinHeap {
    constructor() {
        this.data = [];
        this.count = 0;
    }
    init(arr) {
        this.data = arr;
        this.count = arr.length;
        for(let i = Math.floor(this.count/2)-1; i >= 0; i--) {
            this.shiftDown(i);
        }
    }
    shiftUp(k) {
        while(k > 0 && this.data[Math.floor((k-1)/2)].wt() > this.data[k].wt()) {
            this.swap(Math.floor((k-1)/2), k);
            k = Math.floor((k-1)/2);
        }   
    }
    shiftDown(k) {
        while(2*k+1 < this.count) {
            let j = 2*k+1;
            if(j+1 < this.count && this.data[j+1].wt() < this.data[j].wt()) j++;
            if(this.data[k].wt() <= this.data[j].wt()) break;
            this.swap(k, j);
            k = j;
        }
    }
    insert(edge) {
        this.data[this.count] = edge;
        this.shiftUp(this.count);
        this.count++;
    }
    extractMin() {
        if(this.count <= 0) return;
        let value = this.data[0];
        this.swap(0, this.count-1);
        this.count--;
        this.shiftDown(0);
        return value;
    }
    getMin() {
        if(this.count <= 0) return;
        return this.data[0];
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    swap(a, b) {
        let t = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = t;
    }
}