/*
 * 优先队列
 */
module.exports = function PriorityQueue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.empty = empty;
    this.count = count;
}

// 封装一个构造函数，用于保存数据和优先级
function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
}

// 添加元素
function enqueue(element, priority) {
    // 根据传入元素，创建新的QueueElement
    var queueElement = new QueueElement(element, priority);

    // 获取传入元素应在位置
    if(this.empty()) {
        this.dataStore.push(queueElement);
    } else {
        var addEnd =true;
        for(var i = 0; i < this.dataStore.length; i++) {
            // priority越小，优先级越高
            if(queueElement.priority < this.dataStore[i].priority) {
                this.dataStore.splice(i, 0, queueElement);
                addEnd = false;
                break;
            }
        }
        if(addEnd) {
            this.dataStore.push(queueElement);
        }
    }
}

// 删除元素
function dequeue() {
    return this.dataStore.shift();
}

// 获取队列头部和尾部元素
function front() {
    return this.dataStore[0];
}
function back() {
    if(this.dataStore.length === 0) return;
    return this.dataStore[this.dataStore.length - 1];
}

// 判断当前队列是否为空 
function empty() {
    return this.dataStore.length === 0;
}

// 显示队列元素的个数
function count() {
    return this.dataStore.length;
}