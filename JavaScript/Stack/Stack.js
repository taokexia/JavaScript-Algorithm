/*
 * 栈的实现
 */
module.exports = function Stack() {
    // 栈中的属性、方法
    this.dataStore = [];
    // 栈顶计数
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.size = size;
    this.isEmpty = isEmpty;
}

// 往栈中推入数据
function push(element) {
    this.dataStore[this.top++] = element;
}

// 从栈中取出数据
function pop() {
    return this.dataStore[--this.top];
}

// 获取栈顶的数据
function peek() {
    return this.dataStore[this.top-1];
}

// 清楚栈的数据
function clear() {
    this.top = 0;
}

// 返回栈的长度
function size() {
    return this.top;
}

// 判断是否为空
function isEmpty() {
    return this.top === 0;
}

