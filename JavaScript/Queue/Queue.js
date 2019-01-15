/*
 * 队列的实现
 */
module.exports = function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
    this.has = has;
}

// 向队尾添加一个元素
function enqueue(element) {
    this.dataStore.push(element);
}

// 删除队首的一个元素
function dequeue() {
    return this.dataStore.shift();
}

// 读取队首和队尾的元素
function front() {
    return this.dataStore[0];
}
function back() {
    if(this.dataStore.length === 0) return;
    return this.dataStore[this.dataStore.length - 1];
}

// 输出队列内所有的元素
function toString() {
    var retStr = "";
    for(var i = 0; i < this.dataStore.length; i++) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

// 判断队列是否为空
function empty() {
    if(this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}

// 显示队列元素的个数
function count() {
    return this.dataStore.length;
}

// 判断当前队列是否有element元素
function has(element) {
    return this.dataStore.indexOf(element);
}